<template>
  <footer>
    <template v-if="isRenderFooter">
      <component :is="isShowRedirectStyle ? RedirectProject : Basic" />
    </template>
  </footer>
</template>

<script setup>

import Basic from './Basic/index.vue'
import RedirectProject from './RedirectProject/index.vue'
import {routesListIgnoreFooter}  from '../../../constants/routerList'
const route = useRoute()

const isIgnoredPath = computed(() => {
  return routesListIgnoreFooter.includes(route.path)
})
const isRenderFooter = computed(() => {
  return !isIgnoredPath.value && stateUiGlobal.isActivePage
})
const isShowRedirectStyle = computed(() => {
  return route.path.startsWith('/projects/')
})
</script>
