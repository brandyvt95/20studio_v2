
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import Observer from 'gsap/Observer';

gsap.registerPlugin(ScrollTrigger,SplitText,Observer);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('ScrollTrigger', ScrollTrigger);
  nuxtApp.provide('Observer', Observer);
  nuxtApp.provide('SplitText', SplitText);
  ScrollTrigger.defaults({
    scroller: '#lenisWrapper',  
  })

});
