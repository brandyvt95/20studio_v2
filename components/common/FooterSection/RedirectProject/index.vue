<template>
    <section :class="s.wrapper" ref="wrapper">
      <div :class="s.footer_redirect" ref="content">
        <h1>Footer redirect project</h1>
        
       <!-- <div :class="s.wrapper">
            <div :class="s.info" :id="`info_fr_${currentId}`">
                <h3>
                    {{ content.name[0] }}<br />
                    {{ content.name[1] }}
                </h3>
                <p>{{ content.mission[0] }}</p>
                <div :class="s.ic">
                    <NuxtLink v-if="isMobi" :class="s.link_re_mobi" :to="`/work/work${targetRedirect}`">
                        View project
                    </NuxtLink>
                    <svg v-else viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon">
                        <circle cx="20" cy="20" r="18" stroke-width="1.5" stroke="currentColor" stroke-opacity="0.5" />
                        <circle ref="cirRefIc" cx="20" cy="20" r="18" stroke-width="1.5" stroke="currentColor"
                            stroke-opacity="1" :style="{ strokeDashoffset: 0.000999 }" />
                    </svg>
                </div>
            </div>

            <div :class="s.image" :id="`image_fr_${currentId}`">
                <img :alt="`image_cache_services${targetRedirect}`" :src="`/clone/services${targetRedirect}.webp`"
                    width="0" height="0" sizes="100vw" style="width: auto; height: 100%;" />
            </div>

            <div :class="s.background">
                <img :id="`bg_fr_${currentId}`" :alt="`image_cache_services${targetRedirect}`"
                    :src="`/clone/services${targetRedirect}.webp`" width="0" height="0" sizes="100vw"
                    class="project_image" style="width: 100%; height: auto;" />
            </div>
        </div> -->
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
  import {preserveStyleAndRevert} from '../../../../composables/hooks/utils/preserveStyleAndRevert'
  import s from './style.module.css'
  const {$gsap} = useNuxtApp() 
  const wrapper = ref(null)
  const content = ref(null)
  
  let ctx 
  onMounted(() => {
    nextTick(() => {
      if (!wrapper.value || !content.value) return
  
      // ctx =  $gsap.context(() => {
      //   $gsap.to(content.value, {
      //     x: -700,
      //     ease: 'none',
      //     scrollTrigger: {
      //       trigger: wrapper.value,
      //       start: 'top bottom',
      //       end: 'bottom top',
      //       scrub: true,
      //       markers:true,
      //       once:false
      //     }
      //   })
      // })
    })
  })
  
  onUnmounted(() => {
    preserveStyleAndRevert({
      ctx:ctx,
      el:content.value
    })
})

  </script>
  

