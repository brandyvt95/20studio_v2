import { shallowRef, onMounted } from 'vue';
import type { Ref } from 'vue'

export function useAnimateTypo({
    types,
    refContent,
    motion,
    animate,
}: {
    types: string;
    refContent: Ref<HTMLElement | null>;
    motion: {
        delayEnter?: number;
        delayTrigger?: number;
        threshold?: number;
        start?: string;
        markers?: boolean;
    };
    animate: (gsapWars: gsap.TweenVars, splitInstance: any) => void;
}): void {
    const {$SplitText} = useNuxtApp() as any
    const getSplitType = () => {
        if (refContent.value) {
            const splitInstance = $SplitText.create(refContent.value, {
                type: types,
                mask: "lines"
            });
            return splitInstance;
        }
        return null;
    };

    const getGsapWars = () => {
        const delay = motion?.delayEnter || 0; // Thêm logic nếu cần cho delay
        const topStart = motion?.threshold || 0; // Tính toán threshold tùy vào logic của bạn

        return {
            scrollTrigger: {
                trigger: refContent.value,
                start: motion?.start || `top+=${topStart}% bottom`,
                once: false,
                markers: motion?.markers
            },
            delay,
        };
    };

    const initAnimation = () => {
        if (refContent.value) {
            // Tách nội dung và áp dụng animation
            const splitType = getSplitType();
            const gsapWars = getGsapWars();
            animate(gsapWars, splitType);
        }
    };

    onMounted(() => {
        initAnimation(); // Gọi khi component được mount
    });
}
