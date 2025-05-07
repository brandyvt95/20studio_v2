<script setup>
import { projects_page } from '~/constants/content'

import { defaultPageTransition } from '~/constants/config_transitionPage'
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
    <PageProjectPage :content="projects_page" />
  </WrapperPage>
</template>
