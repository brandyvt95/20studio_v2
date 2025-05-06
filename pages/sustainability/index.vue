<script setup>
import SustainPage from '../../components/page/SustainPage/index.vue'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import {defaultPageTransition} from '~/constants/config_transitionPage'
import { sustainability_page } from '~/constants/content'

import { meta } from '../constants/meta'
useHead({
  title: 'Sustainability Page :: 20 STUDIO',
  ...meta
})


definePageMeta({
  pageTransition: defaultPageTransition
})

</script>

<template>
  <WrapperPage>
    <SustainPage  :content="sustainability_page.content"/>
  </WrapperPage>
</template>

<style scoped>

</style>