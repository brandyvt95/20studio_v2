<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MaskOverlay from './MaskOverlay.vue'
import TriggleViewNavbar from './TriggleViewNavbar.vue'
import LenisWrapper from './LenisWrapper.vue'
import { motionFirstLoadPage } from '~/composables/hooks/transitionpage/useMotionTransPage'
import { activeStateUi } from '~/composables/controls/useStateUi'
import FooterSection from '../common/FooterSection/index.vue'

const maskRef = ref(null)
const route = useRoute()
const currentPath = computed(() => route.path)
const listPathIgnore = ['/projects', '/contact','/services']
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
      <TriggleViewNavbar v-if="stateUiGlobal.isActivePage && !listPathIgnore.includes(currentPath)" />

      <slot />
      <FooterSection v-if="stateUiGlobal.isActivePage" />
    </LenisWrapper>
  </MaskOverlay>
</template>

<style scoped></style>