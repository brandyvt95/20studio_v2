import gsap from 'gsap'
import { transitionMotion, transitionConfig } from '../../../constants/config_transitionPage'
import type { IHandleMotionTransPage } from '~types/transitionPage'

export const motionFirstLoadPage = ({ el }: { el: Element }) => {
    gsap.fromTo(el, transitionConfig.mask.start, transitionConfig.mask.end)
    return null
}
export const setupZIndex = (): number => {
    const z = Number(localStorage.getItem('zIndexPage')) + 1
    localStorage.setItem('zIndexPage', `${z}`)
    return z
}

const handleTransition = (element: Element, className: string, duration: number, callback: any) => {
    element.classList.add(className);
    const timer = setTimeout(() => {
        callback?.();
        element.classList.remove(className);
        clearTimeout(timer);
    }, 2 * 1000);
}

export const motionEnterPage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
    const lenisWrapper = el.children[0];
    handleTransition(el, 'mask-enter', transitionMotion.duration, onCompleteCallback);
    handleTransition(lenisWrapper, 'page-enter', transitionMotion.duration, null);
}

export const motionLeavePage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
    const lenisWrapper = el.children[0];
    handleTransition(lenisWrapper, 'page-leave', transitionMotion.duration, onCompleteCallback);
}


// export const motionEnterPage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
//     const ctx = gsap.context(() => {
//         const lenisWrapper = el.children[0]
//         gsap.timeline()
//            //.set(el, { zIndex: setupZIndex() })
//             .fromTo(el,
//                 transitionConfig.mask.start,
//                 {
//                     ...transitionConfig.mask.end,
//                     onComplete: () => {
//                         onCompleteCallback?.()
//                         ctx.revert();
//                     }
//                 }
//             )
//             .fromTo(lenisWrapper,
//                 transitionConfig.lenisWrapper.enter.start,
//                 transitionConfig.lenisWrapper.enter.end,
//                 "<"
//             )
//     }, el)
// }

// export const motionLeavePage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
//     const ctx = gsap.context(() => {
//         const lenisWrapper = el.children[0]
//         gsap.fromTo(
//             lenisWrapper,
//             transitionConfig.lenisWrapper.leave.start,
//             {
//                 ...transitionConfig.lenisWrapper.leave.end,
//                 onComplete: () => {
//                     onCompleteCallback?.()
//                     ctx.revert() 
//                 }
//             }
//         )
//     }, el)
// }
const handleTransitionDetailProject = (duration: number, callback: any) => {
    const timer = setTimeout(() => {
        callback?.();
        stateUiGlobal.isProjectPageToDetailProject = false
        clearTimeout(timer);
    }, duration * 1000);
}

export const motionEnterPageDetailProject = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
    handleTransitionDetailProject(transitionMotion.duration, onCompleteCallback);
}

export const motionLeavePageDetailProject = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
     el.style.zIndex = '10'
    handleTransitionDetailProject(transitionMotion.duration, onCompleteCallback);
}