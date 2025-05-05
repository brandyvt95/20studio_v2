<script setup>
import { gsap } from 'gsap';
import { about_page } from '~/constants/content'
import AboutPage from '~/components/large/AboutPage/index.vue'
import { transitionConfig } from '~/constants/transition'

import MaskOverlay from '../MaskOverlay.vue'
import { handlePageLeave, handlePageEnter } from '~/hooks/useHandleTransPage';
import { motionFirstLoadPage } from '~/hooks/useMotionTransPage'
import { activeStateUi } from '~/hooks/useStateUi'
const maskRef = ref(null)

onMounted(async () => {
  if (!stateUiGlobal.isPageFirstLoad) {
    stateUiGlobal.isPageFirstLoad = true

    await nextTick()
    if (maskRef.value?.el) {
      motionFirstLoadPage({ el: maskRef.value.el })
      activeStateUi({ param: 'active-page' })
    }
  }
})



definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'default',
    css: false,
    onEnter: (el, done) => {
   
      handlePageEnter({ el, done}) 
    },
    onLeave(el, done) {
      handlePageLeave({el,done})
    }
  }
})
</script>

<template>
  <MaskOverlay ref="maskRef">
    <LenisWrapper>
      <AboutPage :content="about_page.content" />
    </LenisWrapper>
  </MaskOverlay>
</template>

<style scoped></style>