<script setup>


import { defaultPageTransition } from '../../composables/hooks/transitionpage/useHandleTransPage'
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
    <PageSustainPage  :content="sustainability_page.content"/>
  </WrapperPage>
</template>

<style scoped>

</style>