<script setup>

import { home_page } from '~/constants/content'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import { defaultPageTransition } from '../composables/hooks/transitionpage/useHandleTransPage'
import { meta } from '../constants/meta'
import Space from '../components/common/Space/index.vue'
useHead({
  title: 'Home Page :: 20 STUDIO',
  ...meta
})
definePageMeta({
  pageTransition: defaultPageTransition
})
const jsonData = useState('jsonData')
</script>

<template>
  <WrapperPage>
    <PageHomePage 
    v-if="jsonData" 
    :content="jsonData.home_page.data" 
    :info_navbar="jsonData.info_navbar.data"
    :info_company="jsonData.info_company.data"
    :info_project="jsonData.info_project.data"
    />
  </WrapperPage>
</template>
