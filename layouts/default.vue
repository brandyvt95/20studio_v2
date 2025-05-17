<script setup>
import HeaderSection from '../components/common/HeaderSection/index.vue'

import Cursor from '../components/common/Cursor/index.vue'
import { onMounted } from 'vue'
import { initViewportSize } from '../composables/useViewportSize'
const config = useRuntimeConfig()
const cmsUrl = config.public.NUXT_PUBLIC_CMS_URL
/* https://perfect-trust-ae2afb3fe0.strapiapp.com */
const jsonData = useState('jsonData', () => null)

const endpoints = {
  home: 'http://localhost:1337/api/home-page?populate[HeroSection][populate][background][populate]=*&populate[HeroSection][populate][TitleSplit][populate]=*&populate[HeroSection][populate][ButtonAction][populate]=*&populate[ListProject][populate]=*&populate[FAQSection][populate]=*&populate[LetContact][populate]=*',
  contact: 'http://localhost:1337/api/contact-page?populate=*',
  project: 'http://localhost:1337/api/project-page?populate=*',
  sustain: 'http://localhost:1337/api/sustain-page?populate[IntroSection][populate][TitleSplit][populate]=*&populate[AdvantageSection][populate]=*',
  about: 'http://localhost:1337/api/about-page?populate[HeroSection][populate][background][populate]=*&populate[HeroSection][populate][TitleSplit][populate]=*&populate[HeroSection][populate][ButtonAction][populate]=*&populate[IntroSection][populate]=*&populate[AdvantageSection][populate]=*&populate[MindedSection][populate]=*&populate[UsSection][populate]=*',
  data_global:'http://localhost:1337/api/data-global?populate[FooterSection][populate]=*',
  info_companies: 'http://localhost:1337/api/info-companies?populate=*',
  industries_companies:'http://localhost:1337/api/info-companies?populate=*',
  info_navbar: 'http://localhost:1337/api/navbars?populate=*',
  info_project: 'http://localhost:1337/api/list-projects?populate[List][populate]=*',
}

const endpointsMap = {
  home_page: endpoints.home,
  contact_page: endpoints.contact,
  project_page: endpoints.project,
  sustain_page: endpoints.sustain,
  about_page: endpoints.about,
  data_global:endpoints.data_global,
  info_company: endpoints.info_companies,
  industries_company: endpoints.industries_companies,
  info_navbar: endpoints.info_navbar,
  info_project: endpoints.info_project
}

const { data, error } = await useAsyncData('jsonData', async () => {
  const keys = Object.keys(endpointsMap)
  const requests = Object.values(endpointsMap).map(url => $fetch(url))

  const results = await Promise.allSettled(requests)

  const responseData = {}

  results.forEach((result, i) => {
    const key = keys[i]
    if (result.status === 'fulfilled') {
      responseData[key] = result.value
    } else {
      console.warn(`❌ Lỗi khi fetch "${key}" (${endpointsMap[key]}):`, result.reason)
      responseData[key] = null
    }
  })

  return responseData
})

jsonData.value = data.value
console.log('SSR data:', JSON.stringify(jsonData.value))

onMounted(() => {
  initViewportSize()
})
</script>

<template>

  <HeaderSection />
  <Cursor />
  <div class="main-layout">
    <NuxtPage />
  </div>

</template>
<style>
.main-layout {
  width: 100%;
}
</style>
