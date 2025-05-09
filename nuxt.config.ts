// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@storyblok/nuxt','@pinia/nuxt','@nuxtjs/sitemap','@nuxt/image'],
  plugins: [
    '~/plugins/gsap.js'  
  ],
  storyblok: {
    accessToken: process.env.ACCESS_TOKEN_STORYBLOK,
    apiOptions: {
      region: 'vi', 
    },
  },
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