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

  compatibilityDate: '2025-05-04',
})