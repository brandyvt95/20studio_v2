<script setup>
import { about_page } from '~/constants/content'
import { defaultPageTransition } from '../composables/hooks/transitionpage/useHandleTransPage'
import { meta } from '../constants/meta'
import Space from '../components/common/Space/index.vue'
useHead({
  title: 'About Page :: 20 STUDIO',
  ...meta
})
definePageMeta({
  pageTransition: defaultPageTransition
})
const jsonData = useState('jsonData')
</script>

<template>
  <WrapperPage>
    <PageAboutPage  
    v-if="jsonData" 
     :content="jsonData.about_page.data" 
    :info_navbar="jsonData.info_navbar.data"
    :info_company="jsonData.info_company.data"
    :info_project="jsonData.info_project.data"
    />
  </WrapperPage>
</template>

<style scoped>

</style>