<template>
    <div ref="bgRef">
      <slot/>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';

  const { $gsap } = useNuxtApp()
  const bgRef = ref(null);
  
  watch(
  () => stateUiGlobal.isActivePage,
  (isActive) => {
    if (isActive && bgRef.value) {
      console.log('Init ScrollTrigger background');
      $gsap.to(bgRef.value.children[0], {
        y: -200,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bgRef.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }
  },
  { immediate: true } 
);


  </script>
  
  <style scoped>
 
  </style>
  