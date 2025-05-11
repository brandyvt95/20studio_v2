<script setup>
import View from './ViewDeskop/index.vue'
import ViewMobi from './ViewMobi/index.vue'
import './style.css'
const props = defineProps({
  content: Object
})

import { useDevice } from '~/composables/useDevice'
const { isMobile } = useDevice()
const CurrentView = computed(() => isMobile.value ? ViewMobi : View)
</script>

<template>
  <ClientOnly>
    <component :is="CurrentView" :content="content.Common" />
  </ClientOnly>
</template>
