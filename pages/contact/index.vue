<script setup>
import { ref, onMounted } from 'vue'
import { defaultPageTransition } from '../composables/hooks/transitionpage/useHandleTransPage'
import { contact_page } from '~/constants/content'
import { meta } from '../constants/meta'
import { fetchStrapi } from '../../services/strapi'
import { ENDPOINTS } from '../../services/strapi/endpoint'
useHead({
  title: 'Contact Page :: 20 STUDIO',
  ...meta
})
definePageMeta({
  pageTransition: defaultPageTransition
})

const jsonData = useState('jsonData')
</script>

<template>
  <WrapperPage>
    <PageContactPage 
    v-if="jsonData" 
    :info_company="jsonData.info_company.data"
    :content="jsonData.contact_page.data" />
  </WrapperPage>
</template>

<style scoped></style>