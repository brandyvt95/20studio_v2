<script setup>
  import HomePage from '../components/page/HomePage/index.vue'
  import { home_page } from '~/constants/content'
  import WrapperPage from '~/components/wrapper/WrapperPage.vue'
  import {defaultPageTransition} from '~/constants/config_transitionPage'

  definePageMeta({
    pageTransition: defaultPageTransition
  })
  
</script>

<template>
  <WrapperPage>
    <HomePage :content="home_page.content" />
  </WrapperPage>
</template>

<style scoped>

</style>