<template>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  
  import { gsap } from 'gsap';
  import { ScrollSmoother } from 'gsap/ScrollSmoother';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

 

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

 
onMounted(() => {
  ScrollSmoother.create({
smooth: 2,   // seconds it takes to "catch up" to native scroll position
effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
});
  })

  </script>