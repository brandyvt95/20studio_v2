<script setup>
import AboutPage from '~/components/page/AboutPage/index.vue'
import { about_page } from '~/constants/content'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import {defaultPageTransition} from '~/constants/config_transitionPage'

definePageMeta({
  pageTransition: defaultPageTransition
})

</script>

<template>
  <WrapperPage>
    <AboutPage :content="about_page.content" />
  </WrapperPage>
</template>

<style scoped>

</style>