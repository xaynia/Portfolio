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
        const geo = (context && context.geo) || null;

        const ipHash = ip ? crypto.createHash("sha256").update(ip).digest("hex") : null;

        const entry = {
            at: iso,
            ip,
            ipHash,
            geo,
            requestId: context.awsRequestId || context.requestId || null,
            headers: {
                userAgent: headers["user-agent"] || headers["User-Agent"] || null,
                acceptLanguage: headers["accept-language"] || headers["Accept-Language"] || null,
                referer: headers["referer"] || headers["Referer"] || null,
                origin: headers["origin"] || headers["Origin"] || null,
            },
            client,
        };

        const store = getStore("visit-logs");
        const key = `ip/${ipHash || "unknown"}/${day}/${Date.now()}.json`;

        await store.setJSON(key, entry);

        return { statusCode: 204, body: "" };
    } catch (err) {
        console.error("log-visit error:", err);
        return { statusCode: 500, body: "Function error" };
    }
};