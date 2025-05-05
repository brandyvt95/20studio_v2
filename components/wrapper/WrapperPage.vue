<script setup>
import { ref, onMounted,nextTick } from 'vue'
import MaskOverlay from './MaskOverlay.vue'
import LenisWrapper from './LenisWrapper.vue'
import { motionFirstLoadPage } from '~/hooks/useMotionTransPage'
import { activeStateUi } from '~/hooks/useStateUi'

const maskRef = ref(null)

onMounted(async () => {
  if (!stateUiGlobal.isPageFirstLoad) {
    stateUiGlobal.isPageFirstLoad = true

    await nextTick()
    if (maskRef.value?.el) {
      //motionFirstLoadPage({ el: maskRef.value.el })
      activeStateUi({ param: 'active-page' })
    }
  }
})

</script>

<template>
  <MaskOverlay ref="maskRef">
    <LenisWrapper>
      <slot/>
    </LenisWrapper>
  </MaskOverlay>
</template>

<style scoped>

</style>