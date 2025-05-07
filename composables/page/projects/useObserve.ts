
import { onMounted, onBeforeUnmount, watch, unref } from 'vue'

export const useObserver = ({
    el,
    onDown,
    onUp,
    onChange,
    wheelSpeed = -1,
    conditionInit = ref(true),
}: any) => {
    let observer: Observer | null = null
    const { $Observer } = useNuxtApp() as any

    const createObserver = (element: Element) => {
        if (!element || !$Observer) return null

        return $Observer.create({
            target: element,
            type: 'wheel,touch,pointer',
            wheelSpeed,
            onDown,
            onUp,
            onChange,
            preventDefault: false,
        })
    }



    watch(
        [() => unref(el), () => unref(conditionInit)],
        ([element, isActive]) => {

            if (observer) {
                observer.kill()
                observer = null
            }


            if (element && isActive) {
                observer = createObserver(element)
                console.log('Observer created:', observer)
            }
        },
        { immediate: true }
    )

    onBeforeUnmount(() => {
        if (observer) {
            observer.kill()
            observer = null
        }
    })
}