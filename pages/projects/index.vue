<script setup>
import ProjectPage from '~/components/page/ProjectPage/index.vue'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import {defaultPageTransition} from '~/constants/config_transitionPage'
import { meta } from '../constants/meta'
useHead({
  title: 'Project Page :: 20 STUDIO',
  ...meta
})
definePageMeta({
  pageTransition: defaultPageTransition
})

</script>

<template>
  <WrapperPage>
    <ProjectPage />
  </WrapperPage>
</template>

<style scoped>

</style>