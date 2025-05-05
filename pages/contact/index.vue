<script setup>
import ContactPage from '~/components/page/ContactPage/index.vue'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
import {defaultPageTransition} from '~/constants/config_transitionPage'
import { contact_page } from '~/constants/content'

definePageMeta({
  pageTransition: defaultPageTransition
})

</script>

<template>
  <WrapperPage>
    <ContactPage :content="contact_page.content" />
  </WrapperPage>
</template>

<style scoped>

</style>