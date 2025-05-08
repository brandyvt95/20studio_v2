<template>
  <WrapperPage>
    <PageDetailProjectPage :content="data" />
  </WrapperPage>

</template>

<script setup>
import { projects_page } from '~/constants/content'
import { defaultPageTransition } from '../composables/hooks/transitionpage/useHandleTransPage'
import WrapperPage from '~/components/wrapper/WrapperPage.vue'
const route = useRoute()
const slug = route.params.slug

const data = projects_page.find(p => p.slug === slug) ?? (() => {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
})()

definePageMeta({
  pageTransition: defaultPageTransition
})
</script>
