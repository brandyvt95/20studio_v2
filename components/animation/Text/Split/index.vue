<template>
    <div ref="domRef" :class="[s.wrapper, props.tag, props.font, props.className,props.color]">
        <slot />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    type: string,
    tag: string,
    font: string,
    className: String,
    color?:string
}>()
import { useGsap } from '../../../../composables/hooks/useGsap'
import s from './style.module.css'

const domRef = ref(null)
// const { useSplitText } = useGsap()
// const motion = {
//     delayEnter: 0,
//     delayTrigger: 0,
//     threshold: 0,
//     start: 'top 30%',
//     markers: true,
// };

// useSplitText({
//     refContent: domRef,
//     optionSplit: { typeSplit: 'lines' },
//     motion: motion
// });
</script>