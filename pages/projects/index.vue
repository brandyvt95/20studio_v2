<script setup>
import { projects_page } from '~/constants/content'

import { defaultPageTransition } from '../composables/hooks/transitionpage/useHandleTransPage'
import { meta } from '../constants/meta'
useHead({
  title: 'Project Page :: 20 STUDIO',
  ...meta
})
definePageMeta({
  pageTransition: defaultPageTransition
})
const jsonData = useState('jsonData')
</script>

<template>
  <WrapperPage>
    <PageProjectPage   
    v-if="jsonData && jsonData.project_page.data" 
    :content="jsonData.project_page.data" 
   :info_project="jsonData.info_project.data"
    />
  </WrapperPage>
</template>
