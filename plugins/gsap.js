
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger,SplitText);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('scrollTrigger', ScrollTrigger);
  nuxtApp.provide('SplitText', SplitText);
  ScrollTrigger.defaults({
    scroller: '.lenis',  
  })

});
