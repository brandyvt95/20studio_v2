<script setup>
import View from './ViewDeskop/index.vue'
import ViewMobi from './ViewMobi/index.vue'
import './style.css'
const props = defineProps({
  info_project:Object
})

import { useDevice } from '~/composables/useDevice'
const { isMobile } = useDevice()
const CurrentView = computed(() => isMobile.value ? ViewMobi : View)
</script>

<template>
  <ClientOnly>
    <WrapperFirstSection :fullViewport="true">
      <component :is="CurrentView" :info_project="info_project.List"/>
    </WrapperFirstSection>
  </ClientOnly>
</template>
