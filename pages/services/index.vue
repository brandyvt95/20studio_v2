<script setup>

import { defaultPageTransition } from '../composables/hooks/transitionpage/useHandleTransPage'
import { service_page } from '~/constants/content'
import Space from '../components/common/Space/index.vue'
import { meta } from '../constants/meta'
useHead({
  title: 'Our Story :: 20 STUDIO',
  ...meta
})

definePageMeta({
  pageTransition: defaultPageTransition
})
</script>

<template>
  <WrapperPage>
    <PageServicePage />
  </WrapperPage>
</template>

<style scoped>

</style>