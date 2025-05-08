<template>
  <section :class="s.wrapper" ref="wrapper">

    <div :class="s.items" ref="content">
      <div :class="s.head">
        <TypoHeading tag="h3" size="h3" ref="headRef" :className="s.headBrand">
          {{ props.content.brand }}
        </TypoHeading>
        <TypoParagraph tag="p">
          {{ props.content.jobDes }}
        </TypoParagraph>
        <div :class="s.icon" ref="iconRef">
          <Icon />
        </div>
      </div>
      <div :class="s.thumb">
        <img :src="props.content.thumb" alt="" />
      </div>
      <div :class="s.background" ref="backgroundRef">
        <img :src="props.content.thumb" alt="" />
      </div>
    </div>

  </section>
</template>

<script setup>

import Icon from './Icon/index.vue'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { preserveStyleAndRevert } from '../../../../composables/hooks/utils/preserveStyleAndRevert'
import s from './style.module.css'

const props = defineProps({
  content: Object
})
const iconRef = ref(null)


const { $gsap, $SplitText } = useNuxtApp()
const wrapper = ref(null)
const content = ref(null)
const headRef = ref(null)
const backgroundRef = ref(null)
let ctx
onMounted(() => {
  nextTick(() => {
    
   if (!wrapper.value || !backgroundRef.value || !iconRef.value) return

    ctx = $gsap.context(() => {
      $gsap.fromTo(backgroundRef.value, { scale: 1, y: -200 }, {
        scale: 1.4,
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper.value,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          markers: true,
          once: false,
          onUpdate: (self) => {
            if(iconRef.value) iconRef.value.style.strokeDasharray = `${self.progress * 120}px, ${110 - 100 * self.progress}px`
          },
        }
      })
    })
  })
})

onUnmounted(() => {
  preserveStyleAndRevert({
    ctx: ctx,
    el: content.value
  })
})

</script>
