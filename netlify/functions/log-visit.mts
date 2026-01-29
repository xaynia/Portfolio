import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";
import { createHash, randomUUID } from "node:crypto";

type ClientPayload = {
    page?: string;
    from?: string;
    referrer?: string;
    event?: string;
};

function clamp(v: unknown, max = 2000): string | null {
    if (typeof v !== "string") return null;
    const s = v.trim();
    if (!s) return null;
    return s.length > max ? s.slice(0, max) : s;
}

export default async (req: Request, context: Context): Promise<Response> => {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405, headers: { allow: "POST" } });
    }

    let client: ClientPayload | null = null;
    try {
        const text = await req.text();
        if (text) client = JSON.parse(text);
    } catch {
        client = null;
    }

    const now = new Date();
    const iso = now.toISOString();
    const day = iso.slice(0, 10);

    const ip = context.ip ?? null;
    const ipHash = ip ? createHash("sha256").update(ip).digest("hex") : null;

    const entry = {
