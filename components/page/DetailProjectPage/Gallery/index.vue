<template>
  <section :class="s.GridImageSlider">
    <div :class="s.titleProject">
      <h2 :class="s.nameProject">{{ content.infoProject }}</h2>
      <p :class="s.infoProject">{{ content.desProject }}</p>
    </div>

    <div :class="s.container" ref="wrapper">
      <div :class="s.row" ref="listTop">
        <div v-for="(src, index) in content.img.slice(0, 3)" :key="index" :class="s.media">
          <img alt="" :src="src" />
        </div>
      </div>
      <div :class="s.row" ref="listBot">
        <div v-for="(src, index) in content.img.slice(3, 6)" :key="index" :class="s.media">
          <img alt="" :src="src" />
        </div>
      </div>
    </div>

  </section>
</template>
<script setup>
import { preserveStyleAndRevert } from '../../../../composables/hooks/utils/preserveStyleAndRevert'
import s from './style.module.css'
const props = defineProps({
  content: Object
})
const {$gsap} = useNuxtApp()
const wrapper = ref(null)
const listTop = ref(null)
const listBot = ref(null)

let ctx
onMounted(() => {
    nextTick(() => {
        if (!wrapper.value || !listTop.value || !listBot.value) return
        console.log("InitScrollS")
        ctx = $gsap.context(() => {
          $gsap.timeline({
            scrollTrigger: {
              trigger: wrapper.value,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
             // markers:true,
              once:false
            }
          })
          .fromTo(listTop.value,{x:-100},{x: 100})
          .fromTo(listBot.value,{x:100},{x: -100},"<")
        })
    })
})
onUnmounted(() => {
  if (ctx) {
    ctx.revert(); // Dọn sạch toàn bộ animation và trigger được tạo trong context
  }
})

</script>
