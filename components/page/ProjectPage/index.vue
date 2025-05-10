<script setup>
import View from './ViewDeskop/index.vue'
import ViewMobi from './ViewMobi/index.vue'
import './style.css'
const props = defineProps({
  content: Object
})

const data = props.content.map((item) => ({
  slug: item.slug,
  brand: item.brand,
  jobDes: item.jobDes,
  thumb: item.thumb,
  background: item.background,
}))

import { useDevice } from '~/composables/useDevice'
const { isMobile } = useDevice()
const CurrentView = computed(() => isMobile.value ? ViewMobi : View)
</script>

<template>
  <ClientOnly>
    <component :is="CurrentView" :content="data" />
  </ClientOnly>
</template>
