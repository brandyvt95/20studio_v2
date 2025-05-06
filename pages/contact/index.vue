<script setup>
import ContactPage from '~/components/page/ContactPage/index.vue'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
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
    <ContactPage :content="contact_page.content" />
    <Space/>
  </WrapperPage>
</template>

<style scoped>

</style>