// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    '@/assets/scss/theme.scss',   // ← first: defines --bg, --text …
    '~/assets/scss/main.scss'     // ← second: consumes them
  ],
  modules: ['nuxt-easy-lightbox'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
