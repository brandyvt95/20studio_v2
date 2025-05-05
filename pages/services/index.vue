<script setup>
import ServicePage from '~/components/page/ServicePage/index.vue'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import {defaultPageTransition} from '~/constants/config_transitionPage'
import { service_page } from '~/constants/content'
definePageMeta({
  pageTransition: defaultPageTransition
})

</script>

<template>
  <WrapperPage>
    <ServicePage :content="service_page.content" />
  </WrapperPage>
</template>

<style scoped>

</style>