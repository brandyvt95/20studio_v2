<template>
    <section :class="[s.section, 'bgclr-white']" ref="containerRef">
        <div :class="s.items">
            <div :class="s.item" v-for="(work, index) in props.content" :key="index">
                <div :class="s.img">
                    <img :src="work.thumb" alt="" />
                </div>
                <div :class="s.meta">
                    <TypoHeading tag="h2" size="psmall" font="BD-Medium" :class="s.title">
                        {{ work.brand }}
                    </TypoHeading>
                    <TypoHeading tag="h3" size="psmall" font="BS-Regular" :class="[s.subtit,'clr-dark-grey--06']">
                        {{ work.jobDes }}
                    </TypoHeading>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import s from './style.module.css'
const props = defineProps({
    content: Object
})
console.log(props.content)
</script>