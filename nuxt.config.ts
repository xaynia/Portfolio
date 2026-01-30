// nuxt.config.ts
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },

    css: ['@/assets/scss/main.scss'],

    modules: ['nuxt-easy-lightbox'],

    compatibilityDate: '2024-11-01',

    devtools: { enabled: true }
})
