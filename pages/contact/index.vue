<script setup>

import {defaultPageTransition} from '~/constants/config_transitionPage'
import { contact_page } from '~/constants/content'
import { meta } from '../constants/meta'
import Space from '../components/common/Space/index.vue'
useHead({
  title: 'Contact Page :: 20 STUDIO',
  ...meta
})
definePageMeta({
  pageTransition: defaultPageTransition
})

</script>

<template>
  <WrapperPage>
    <PageContactPage :content="contact_page.content" />
  </WrapperPage>
</template>

<style scoped>

</style>