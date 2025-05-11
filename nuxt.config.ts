// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@pinia/nuxt','@nuxtjs/sitemap','@nuxt/image'],
  plugins: [
    '~/plugins/gsap.js'  
  ],
  devtools: {
    enabled: false,

    timeline: {
      enabled: false,
    },
  },
  site: {
    url: process.env.URL_DEV,
    gzip: true,
  },
  runtimeConfig: {
    URL_MAIN: process.env.URL_MAIN, // dùng được ở server
    public: {
      URL_MAIN: process.env.URL_MAIN, // dùng được ở client
    },
  },
  compatibilityDate: '2025-05-04',
})