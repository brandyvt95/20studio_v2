<script setup>
import ServicePage from '~/components/page/ServicePage/index.vue'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import {defaultPageTransition} from '~/constants/config_transitionPage'
import { service_page } from '~/constants/content'
import Space from '../components/common/Space/index.vue'
import { meta } from '../constants/meta'
useHead({
  title: 'Service Page :: 20 STUDIO',
  ...meta
})

definePageMeta({
  pageTransition: defaultPageTransition
})

</script>

<template>
  <WrapperPage>
    <ServicePage :content="service_page.content" />
    <Space/>
  </WrapperPage>
</template>

<style scoped>

</style>