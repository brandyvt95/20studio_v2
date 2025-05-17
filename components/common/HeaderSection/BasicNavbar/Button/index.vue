<script setup>
import s from './style.module.css'
const buttonRef = ref(null)
const isModalMenuOpen = stateModalNavbar()
defineExpose({ buttonRef })


const { $gsap } = useNuxtApp()
const iconOpen = ref(null)
const iconClose = ref(null)
const lableRef = ref(null)
let tlIconToggle, tlLableToggle, toggleDisplay
let unwatchToggleNavbar, unwatchTransitionPage
onMounted(async () => {
  await nextTick()

  // Timeline cho icon
  tlIconToggle = $gsap.timeline({
    paused: true,
    default: {
      duration: 0.5,
      ease: 'power2.out'
    }
  }).to(iconOpen.value.children, {
    attr: { x2: 25 },
    stagger: .1,
  }).to(iconClose.value.children, {
    strokeDasharray: 0,
    strokeDashoffset: 0,
    stagger: .1,
  }, "<")

  tlLableToggle = $gsap.timeline({
    paused: true,
    default: {
      duration: 0.5,
      ease: 'power2.out'
    }
  })
    .to(lableRef.value, {
      y: 10,
      rotate: -7,
      opacity: 0,
    })
    .call(() => {
      const currentText = lableRef.value.textContent
      lableRef.value.textContent = currentText === 'Menu' ? 'Close' : 'Menu'

      $gsap.set(lableRef.value, {
        y: -10,
        rotate: 7,
        opacity: 0
      })
    })
    .to(lableRef.value, {
      y: 0,
      rotate: 0,
      opacity: 1,
    })




  toggleDisplay = $gsap.timeline({
    paused: true,
    default: {
      duration: .5,
      ease: 'power2.out'
    }
  })
    .to(lableRef.value, {
      y: 10,
      rotate: -7,
      opacity: 0,
    }).to(iconOpen.value.children, {
      attr: { x2: 20 },
      stagger: .1,
    }, "<")
    .to(iconClose.value.children, {
      strokeDasharray: 19,
      strokeDashoffset: 19,
      stagger: .1,
    }, "<")


  unwatchToggleNavbar = watch(
    () => stateUiGlobal.toggleNavbar,
    (newValue) => {

      if (newValue) {
        console.log("toggle on")
        toggleDisplay.reverse()
      } else {
        console.log("toggle off")
        toggleDisplay.play()
      }
    },
    { immediate: true }
  )

  unwatchTransitionPage = watch(
    () => stateUiGlobal.isRunningTransitionPage,
    (val) => {
      if (val) {
        console.log("TRANSISTIONPAGE ")
        toggleDisplay.eventCallback('onComplete', () => {
          lableRef.value.textContent = 'Menu'
        })
        toggleDisplay.play()
        tlIconToggle.progress(0).pause()
        tlLableToggle.progress(0).pause()
      }
    },
    { immediate: false }
  )

})


function toggleMenu() {
  isModalMenuOpen.value = !isModalMenuOpen.value
  if (!isModalMenuOpen.value) {
    // Đóng menu
    tlIconToggle.reverse()
    tlLableToggle.reverse()
  } else {

    tlIconToggle.play()
    tlLableToggle.play()
  }
}
onUnmounted(() => {
  const timelines = [tlIconToggle, tlLableToggle, toggleDisplay]

  timelines.forEach(timeline => {
    if (timeline) {
      timeline.kill()
    }
  })
  if (unwatchToggleNavbar) unwatchToggleNavbar()
  if (unwatchTransitionPage) unwatchTransitionPage()
  tlIconToggle = tlLableToggle = toggleDisplay = null
})

</script>
<template>
  <button ref="buttonRef" @click="toggleMenu" :class="s.button_menu">
    <h3 :class="s.lable">
      <span ref="lableRef" :class="s.lable_item">Menu</span>
    </h3>
    <div :class="s.icon">
      <svg ref="iconOpen" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon_burger">
        <line x1="18" y1="0.6" y2="0.6" stroke="currentColor" strokeWidth="1.2"></line>
        <line x1="18" y1="5.7167" y2="5.7167" stroke="currentColor" strokeWidth="1.2"></line>
        <line x1="18" y1="10.8334" y2="10.8334" stroke="currentColor" strokeWidth="1.2"></line>
      </svg>
      <svg ref="iconClose" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon_close">
        <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" stroke="currentColor" strokeWidth="1.2"
          :style="{ strokeDashoffset: 19, strokeDasharray: 19 }"></line>
        <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" stroke="currentColor" strokeWidth="1.2"
          :style="{ strokeDashoffset: 19, strokeDasharray: 19 }"></line>
      </svg>
    </div>
  </button>
</template>
