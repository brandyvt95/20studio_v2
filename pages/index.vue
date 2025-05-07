<script setup>

import { home_page } from '~/constants/content'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import { defaultPageTransition } from '~/constants/config_transitionPage'
import { meta } from '../constants/meta'
import Space from '../components/common/Space/index.vue'
useHead({
  title: 'Home Page :: 20 STUDIO',
  ...meta
})
definePageMeta({
  pageTransition: defaultPageTransition
})

</script>

<template>
  <WrapperPage>
    <PageHomePage :content="home_page.content" />
  </WrapperPage>
</template>
