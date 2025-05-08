// ~/constants/pageTransitionConfig.ts

export const transitionMotion = {
  mask: { x: 0, y: '-2%' },
  page:{
    rotate:7,
    y:500,
    scale:1.5,
  },
  duration: 2,
  ease:'power3.out',
  brightness100: {
      '-webkit-filter': 'brightness(100%)',
      filter: 'brightness(100%)',
  },
  brightness16: {
      '-webkit-filter': 'brightness(16%)',
      filter: 'brightness(16%)',
  },
}
export const transitionConfig = {
  mask: {
      start: { clipPath: `polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)` },
      end: {
          clipPath: `polygon(0% ${transitionMotion.mask.y}, 100% 0%, 100% 100%, 0% 100%)`,
          duration: transitionMotion.duration,
          ease: transitionMotion.ease,
      }
  },
  lenisWrapper: {
      enter: {
          start: {
              rotate: 7,
              y: 500,
              scale:1.5,
             ...transitionMotion.brightness16
          },
          end: {
              rotate: 0,
              y: 0,
              scale:1,
              ...transitionMotion.brightness100,
              duration: transitionMotion.duration,
              ease: transitionMotion.ease,
          }
      },
      leave: {
          start: {
              rotate: 0,
              y: 0,
              scale:1,
              ...transitionMotion.brightness100
           
          },
          end: {
              rotate: -7,
              y: -500,
              scale:1.5,
              ...transitionMotion.brightness16,
              duration: transitionMotion.duration,
              ease: transitionMotion.ease,
          }
      }
  }
}