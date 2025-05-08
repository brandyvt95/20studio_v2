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

</script>

<template>
  <WrapperPage>
    <PageAboutPage :content="about_page.content" />
  </WrapperPage>
</template>

<style scoped>

</style>