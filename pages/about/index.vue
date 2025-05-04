<!-- pages/index.vue và các trang khác -->
<script setup>
import { gsap } from 'gsap';
import { useUiStore } from '~/stores/ui'

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'default', // Quan trọng: mode "default" sẽ giữ cả hai trang trên DOM
    css: false, // Tắt CSS transition để dùng JS (GSAP)

    onEnter: (el, done) => {
      // Animation cho trang mới đi vào
      // gsap.fromTo(el, 
      //   { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' },
      //   { 
      //     clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', 
      //     duration: 1.2,
      //     ease: 'power3.out',
      //     onComplete: done
      //   }
      // );
    },

    onLeave: (el, done) => {
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
});
</script>

<template>
  <div class="page-content">
    Aboutus
  </div>
</template>

<style scoped>
.page-content {
  width: 100%;
  height: 100%;
}
</style>