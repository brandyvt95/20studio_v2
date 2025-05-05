// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@storyblok/nuxt','@pinia/nuxt'],
  storyblok: {
    accessToken: 'p1eiaCqutiYyMkJ9XbrBYwtt',
    apiOptions: {
      region: 'vi', // hoặc 'eu', tùy không gian bạn tạo
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: false,
    },
  },
  compatibilityDate: '2025-05-04',
})