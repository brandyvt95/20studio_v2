<script setup>
import AboutPage from '~/components/page/AboutPage/index.vue'
import { about_page } from '~/constants/content'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import {defaultPageTransition} from '~/constants/config_transitionPage'
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
    <AboutPage :content="about_page.content" />
    <Space/>
  </WrapperPage>
</template>

<style scoped>

</style>