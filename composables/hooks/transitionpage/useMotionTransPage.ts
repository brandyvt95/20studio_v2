import gsap from 'gsap'
import { transitionMotion, transitionConfig } from '../../../constants/config_transitionPage'
import type { IHandleMotionTransPage } from '~types/transitionPage'

export const motionFirstLoadPage = ({ el }: { el: Element }) => {
    gsap.fromTo(el, transitionConfig.mask.start, transitionConfig.mask.end)
    return null
}
export const setupZIndex = (): number => {
    stateUiGlobal.pageZIndex += 1
    return stateUiGlobal.pageZIndex
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
    const ctx = gsap.context(() => {
        gsap.set('.page-dark-overlay', { opacity: 0 })
        gsap.timeline()
            .set(el, { zIndex: setupZIndex() })
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
            .fromTo('.page-main-wrap',
                transitionConfig.mainWrap.enter.start,
                transitionConfig.mainWrap.enter.end,
                "<"
            )
    }, el)
}

export const motionLeavePage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                onCompleteCallback?.()
                ctx.revert()
            }
        })

        tl.to(
            '.page-main-wrap',
            {
                ...transitionConfig.mainWrap.leave.end,
            }
        )

        tl.to(
            '.page-dark-overlay',
            {
                opacity: 0.84,
                duration: transitionMotion.duration,
                ease: transitionMotion.ease
            },
            "<"
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