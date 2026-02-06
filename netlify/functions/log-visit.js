const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

exports.handler = async (event, context) => {
    try {
        if (event.httpMethod !== "POST") {
            return {
                statusCode: 405,
                headers: { Allow: "POST", "Cache-Control": "no-store" },
                body: "Method Not Allowed",
            };
        }

        let client = null;
        try {
            client = event.body ? JSON.parse(event.body) : null;
        } catch {
            client = { raw: event.body || "" };
        }

        const now = new Date();
        const iso = now.toISOString();
        const day = iso.slice(0, 10);

        const headers = event.headers || {};
        const xff = headers["x-forwarded-for"] || headers["X-Forwarded-For"] || "";
        const headerIp = (xff.split(",")[0] || "").trim();

        const ip = (context && context.ip) || headerIp || null;
        const countryCode =
            headers["x-nf-geo-country"] ||
            headers["X-Nf-Geo-Country"] ||
            null;

        const geo = countryCode ? { country: { code: countryCode } } : null;

        const ipHash = ip ? crypto.createHash("sha256").update(ip).digest("hex") : null;

        const entry = {
            at: iso,
            ip,
            ipHash,
            geo,
            requestId: (context && (context.awsRequestId || context.requestId)) || null,
            headers: {
                userAgent: headers["user-agent"] || headers["User-Agent"] || null,
                acceptLanguage: headers["accept-language"] || headers["Accept-Language"] || null,
                referer: headers["referer"] || headers["Referer"] || null,
                origin: headers["origin"] || headers["Origin"] || null,
            },
            client,
            geoHeaders: {
                xNfGeoCountry: headers["x-nf-geo-country"] || headers["X-Nf-Geo-Country"] || null,
                xNfGeoCity: headers["x-nf-geo-city"] || headers["X-Nf-Geo-City"] || null,
                xNfGeoRegion: headers["x-nf-geo-region"] || headers["X-Nf-Geo-Region"] || null,
                xNfGeoTimezone: headers["x-nf-geo-timezone"] || headers["X-Nf-Geo-Timezone"] || null,
            },
            countryCode: countryCode,
        };

        if (!process.env.NETLIFY_SITE_ID || !process.env.NETLIFY_AUTH_TOKEN) {
            console.error("Missing NETLIFY_SITE_ID or NETLIFY_AUTH_TOKEN");
            return { statusCode: 500, body: "Blobs not configured" };
        }

        const store = getStore("visit-logs", {
            siteID: process.env.NETLIFY_SITE_ID,
            token: process.env.NETLIFY_AUTH_TOKEN,
        });

        const ts = Date.now();
        const id = crypto.randomUUID();

        // Original per-IP key:
        const mainKey = `ip/${ipHash || "unknown"}/${day}/${ts}_${id}.json`;
        await store.setJSON(mainKey, entry);

        // Time-index key:
        const indexKey = `ts/${day}/${ts}_${ipHash || "unknown"}_${id}.json`;
        await store.setJSON(indexKey, { ref: mainKey, at: iso, ipHash });

        return { statusCode: 204, body: "" };
    } catch (err) {
        console.error("log-visit error:", err);
        return { statusCode: 500, body: "Function error" };
    }
};