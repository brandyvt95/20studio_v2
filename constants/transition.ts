export const transitionMotion = {
    mask: { x: 0, y: '-5%' },
    duration: 1.36,
    ease:'power3.out'
}
export const transitionConfig = {
    mask: {
        start: { clipPath: `polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)` },
        end: {
            clipPath: `polygon(0% 0%, 100% ${transitionMotion.mask.y}, 100% 100%, 0% 100%)`,
            duration: transitionMotion.duration,
            ease: transitionMotion.ease,
        }
    },
    lenisWrapper: {
        enter: {
            start: {
                rotate: 20,
                y: -20,
                transformOrigin: 'top left'
            },
            end: {
                rotate: 0,
                y: 0,
                duration: transitionMotion.duration,
                ease: transitionMotion.ease,
            }
        },
        leave: {
            start: {
                rotate: 0,
                y: 0,
                transformOrigin: 'top left'
            },
            end: {
                rotate: -20,
                y: 20,
                duration: transitionMotion.duration,
                ease: transitionMotion.ease,
            }
        }
    }
}