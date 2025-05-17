<script setup>
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import Button from './Button/index.vue'
import Icon from './Icon/index.vue'
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import s from './style.module.css'
const data = defineProps({
  content: Object
})
// Ref cho DOM elements
const buttonRef = ref(null)
const navListRef = ref(null)
const itemListRef = ref(null)
const iconRef = ref(null)
const { $gsap } = useNuxtApp()

let tl
onMounted(async () => {
  await nextTick()
  tl = $gsap.timeline({
    paused: true
  })
    .to(itemListRef.value.children, {
      y: 0,
      opacity: 1,
      rotate: 0,
      stagger: -.02,
      duration: .72
    })
    .to(iconRef.value.iconRef, {
      rotate: 0,
      scale: 1,
      y: 0,
      duration: .72
    }, "<")
  tl.play()
})
const stopWatchNavbar = watch(
  () => stateUiGlobal.toggleNavbar,
  (newValue) => {
    if (!tl) return
    if (newValue) {
      buttonRef.value?.buttonRef.classList.remove('disable-pointer')
      tl.reverse()
    } else {
  buttonRef.value?.buttonRef.classList.add('disable-pointer')
      tl.play()
    }
  },
  { immediate: false }
)

const stopWatchTransition = watch(
  () => stateUiGlobal.isRunningTransitionPage,
  (val) => {
    if (val) tl.play()
  },
  { immediate: false }
)

onUnmounted(() => {
  stopWatchNavbar()
  stopWatchTransition()
  if (tl) {
    tl.kill()
    tl = null
  }
})

</script>
<template>
  <Button ref="buttonRef" />
  <nav ref="navListRef" :class='s.nav' data-scopeCursor="close">
    <Icon ref="iconRef" :content="data.content.menuDeskop" />
    <ul :class='s.nav_list' ref="itemListRef">
      <li :class='s.nav_item' v-for="(url, label) in data.content.menuDeskop" :key="label">
        <ButtonBasic :to="url">
          <TypoParagraph tag="p" size="psmall" font="BD-Medium" color="clr-white">
            {{ label }}
          </TypoParagraph>
        </ButtonBasic>
      </li>
    </ul>
  </nav>
</template>
