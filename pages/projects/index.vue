<script setup>
import { defaultPageTransition } from '../composables/hooks/transitionpage/useHandleTransPage'
import { meta } from '../constants/meta'
useHead({
  title: 'Project Page :: 20 STUDIO',
  ...meta
})
definePageMeta({
  pageTransition: defaultPageTransition
})
const jsonData = useState('jsonData')
</script>

<template>
  <WrapperPage>
    <PageProjectPage v-if="jsonData" 
      :info_project="jsonData.info_project.data" />
  </WrapperPage>
</template>
