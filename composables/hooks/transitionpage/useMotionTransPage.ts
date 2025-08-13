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
    }, 20 * 1000);
}

// export const motionEnterPage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
//     const mainWrap = el.children[0];
//     handleTransition(el, 'mask-enter', transitionMotion.duration, onCompleteCallback);
//     handleTransition(mainWrap, 'page-enter', transitionMotion.duration, null);
// }

// export const motionLeavePage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
//     const mainWrap = el.children[0];
//     handleTransition(mainWrap, 'page-leave', transitionMotion.duration, onCompleteCallback);
// }


export const motionEnterPage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
    const ctx = gsap.context(() => {
        const mainWrap = el.children[0]
        gsap.timeline()
           //.set(el, { zIndex: setupZIndex() })
            .fromTo(el,
                transitionConfig.mask.start,
                {
                    ...transitionConfig.mask.end,
                    onComplete: () => {
                        onCompleteCallback?.()
                        ctx.revert();
                    }
                }
            )
            .fromTo(mainWrap,
                transitionConfig.mainWrap.enter.start,
                transitionConfig.mainWrap.enter.end,
                "<"
            )
    }, el)
}

export const motionLeavePage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
    const ctx = gsap.context(() => {
        const mainWrap = el.children[0]
        gsap.to(
            mainWrap,
            //transitionConfig.mainWrap.leave.start,
            {
                ...transitionConfig.mainWrap.leave.end,
                onComplete: () => {
                    onCompleteCallback?.()
                    ctx.revert() 
                }
            }
        )
    }, el)
}


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