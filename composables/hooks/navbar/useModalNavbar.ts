import { shallowRef } from 'vue'
import gsap from 'gsap'
import { transitionMotion,transitionConfig } from '../../../constants/config_transitionPage'
export const motion = {
  toggleModalNavbar:{
      start: {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      },end:{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: transitionMotion.duration,
          ease:transitionMotion.ease,
      }
  }
}
export function useModalNavbar(modalRef: Ref<HTMLElement | null>) {
  const tl = shallowRef<gsap.core.Timeline | null>(null)

  const init = () => {
    if (modalRef.value) {
      tl.value = gsap.timeline({ paused: true })
      tl.value.fromTo(modalRef.value, motion.toggleModalNavbar.start, motion.toggleModalNavbar.end)
    }
  }

  const play = () => tl.value?.play()
  const reverse = () => tl.value?.reverse()

  return {
    init,
    play,
    reverse,
    timeline: tl
  }
}

