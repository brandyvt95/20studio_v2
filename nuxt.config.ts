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
    supabaseServicesKey: process.env.NUXT_PUBLIC_SUPABASE_SERVICE_KEY, // dùng được ở server
    public: {
      URL_MAIN: process.env.URL_MAIN, 
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
    },
  },
  compatibilityDate: '2025-05-04',
})