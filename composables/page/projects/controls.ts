import { stateSliderProjects } from "./state"
import { updateIndex } from "./utils"

const animate = ({ dir }: any) => {
   
  
    const { $gsap } = useNuxtApp() as any

    $gsap.timeline({
      onComplete: () => {
        stateSliderProjects.lockScroll = false
        console.log("ready")
      }
    })
    .to('#slide', {
      xPercent: -dir * 100,
      duration: 2,
      ease: 'power2.out',
    })
  }
  
export const handleOnDown = ({dir}:any) => {
    if (stateSliderProjects.lockScroll) return 
    stateSliderProjects.lockScroll = true
    console.log('handleOnDown')
    updateIndex(dir)
    //animate({dir})

}
export const handleOnUp = ({dir}:any) => {
    if (stateSliderProjects.lockScroll) return 
    stateSliderProjects.lockScroll = true
    console.log('handleOnUp')
    updateIndex(dir)
  //  animate({dir})
}