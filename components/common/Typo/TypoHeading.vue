<template>
    <component :is="tag" :class="computedClass">
        <slot />
    </component>
</template>

<script lang="ts">
import './style.css'
import { defineComponent } from 'vue';

import { propsTypoParagraph } from './typography';


export default defineComponent({
    name: 'TypoHeading',
    props: {
       ...propsTypoParagraph
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