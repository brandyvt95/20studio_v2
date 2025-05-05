import gsap from 'gsap'
import { transitionConfig } from '~/constants/transition'
import type { IHandleMotionTransPage } from '~/types/transitionPage'

export const motionFirstLoadPage = ({ el }: { el: Element }) => {
    gsap.fromTo(el, transitionConfig.mask.start, transitionConfig.mask.end)
    return null
}
export const setupZIndex = (): number => {
    const z = Number(localStorage.getItem('zIndexPage')) + 1
    localStorage.setItem('zIndexPage', `${z}`)
    return z
}

export const motionEnterPage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
    const ctx = gsap.context(() => {
        const lenisWrapper = el.children[0]
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
            .fromTo(lenisWrapper,
                transitionConfig.lenisWrapper.enter.start,
                transitionConfig.lenisWrapper.enter.end,
                "<"
            )
    }, el)
}

export const motionLeavePage = ({ el, onCompleteCallback }: IHandleMotionTransPage): void => {
    const ctx = gsap.context(() => {
        const lenisWrapper = el.children[0]
        gsap.fromTo(
            lenisWrapper,
            transitionConfig.lenisWrapper.leave.start,
            {
                ...transitionConfig.lenisWrapper.leave.end,
                onComplete: () => {
                    onCompleteCallback?.()
                    ctx.revert() 
                }
            }
        )
    }, el)
}