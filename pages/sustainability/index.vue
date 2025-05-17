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
const jsonData = useState('jsonData')
</script>

<template>
  <WrapperPage>
    <PageSustainPage v-if="jsonData && jsonData.sustain_page.data" :content="jsonData.sustain_page.data" />
  </WrapperPage>
</template>

<style scoped>

</style>