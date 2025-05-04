<script setup>
import { gsap } from 'gsap'
import HomePage from '~/components/HomePage/index.vue'
import { useUiStore } from '~/stores/ui'
import { home_page } from '~/constants/content'
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'default',
    css: false,

    onLeave(el, done) {
      const ui = useUiStore()
      ui.showComponent = false
      gsap.to(el, {
        y: 100,
        duration: 1.2,
        ease: 'power3.out',
        onComplete: () => {
          setTimeout(() => {
            ui.showComponent = true
          }, 3000)  
          done()
        }
      })
    }
  }
})

</script>

<template>
   <HomePage :content="home_page.content" />
</template>

<style scoped>
.page-content {
  width: 100%;
  height: 100%;
}
</style>