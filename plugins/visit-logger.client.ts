export default defineNuxtPlugin(() => {
    // Netlify functions live here on deploy:
    const endpoint = "/.netlify/functions/log-visit";
    const router = useRouter();

    function send(payload: Record<string, unknown>) {
        const body = JSON.stringify(payload);

        if (navigator.sendBeacon) {
            navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
            return;
        }

        fetch(endpoint, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body,
            keepalive: true,
        }).catch(() => {});
    }

    // initial page view
    send({
        event: "pageview",
        page: router.currentRoute.value.fullPath,
        referrer: document.referrer || "",
    });

    // SPA navigation
    router.afterEach((to, from) => {
        if (to.fullPath === from.fullPath) return;
        send({
            event: "pageview",
            page: to.fullPath,
            from: from.fullPath,
            referrer: document.referrer || "",
        });
    });
});
