<script setup>
import { defaultPageTransition } from '../composables/hooks/transitionpage/useHandleTransPage'
import { meta } from '../constants/meta'

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
      :content="jsonData.contact_page.data" 
    />
  </WrapperPage>
</template>

<style scoped></style>
