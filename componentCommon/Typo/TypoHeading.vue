<template>
    <component :is="tag" :class="computedClass">
        <slot />
    </component>
</template>

<script lang="ts">
import './style.css'
import { defineComponent } from 'vue';
import type { PropType } from 'vue';


export default defineComponent({
    name: 'TypoHeading',
    props: {
        tag: {
            type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>,
            default: 'h1',
        },
        font: {
            type: String as PropType<
                | 'BD-Regular'
                | 'BD-Medium'
                | 'BD-Bold'
                | 'BS-Regular'
                | 'BS-Medium'
                | 'BS-Bold'
            >,
            default: '',
        },
        className: {
            type: String,
            default: '',
        },

    },
    computed: {
        computedClass(): string {
            const tagClass = this.tag
            const font = this.font ? `${this.font}` : ''
            const custom = this.className
            return [tagClass, font,custom].filter(Boolean).join(' ')
        },
    },
})
</script>