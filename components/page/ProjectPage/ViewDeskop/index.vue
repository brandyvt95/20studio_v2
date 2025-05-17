<template>
    <section :class="s.section" ref="containerRef" data-scopeCursor="View">
        <div :class="s.items">
            <div :class="s.detailGr">
                <MotionHead :dataTitle="data.brand" :dataSubTitle="data.type" :dataParagraph="data.job_description" :yTarget="10" :duration=".7" easeIn="power3.out" easeOut="power3.out">
                    <TypoHeading :class="s.title"  tag="h3" size="h2" font="BD-Regular"></TypoHeading>
                    <TypoParagraph  tag="p" font="BS-Regular"></TypoParagraph>
                </MotionHead>
            </div>
            <MotionMask id="thumb" :classs="s.thumbGr" :dirRevert="1" :duration="1" ease="power3.inOut">
                <li v-for="(item, index) in data.thumbnail" :key="index" :class="s.thumb">
                   <img :src="item.url" alt="" />
                </li>
            </MotionMask>

            <MotionMask id="background" :classs="s.backgroundGr" :dirRevert="-1" :duration="1" ease="power3.inOut">
                <li v-for="(item, index) in data.background" :key="index" :class="s.background" id="slide">
                    <ButtonBasic @click="stateUiGlobal.isProjectPageToDetailProject = true" :to="`/projects/${data.slug[index]}`">
                        <img :src="item.url" alt="" />
                    </ButtonBasic>
                </li>
            </MotionMask>
            <div :class="s.indi">
                <MotionCount :yTarget="10" :duration=".6" easeIn="power2.in" easeOut="power2.out">
                    <TypoParagraph tag="span" font="BS-Regular" :class="s.cur"></TypoParagraph>
                    <TypoParagraph tag="span" font="BS-Regular" :class="s.total"> / 0{{ info_project.length }}</TypoParagraph>
                </MotionCount>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useObserver } from '../../../../composables/page/projects/useObserve'
import { handleOnDown, handleOnUp } from '../../../../composables/page/projects/controls'
import { stateSliderProjects } from '../../../../composables/page/projects/state';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';

import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
import { formatData } from './utils'
import MotionMask from './Slide/MotionMask.vue';
import MotionCount from './Slide/MotionCount.vue';
import MotionHead from './Slide/MotionHead.vue';
const props = defineProps({
    content: Object,
    info_project:Object
})
const data = formatData(props.info_project)
const containerRef = ref(null)
stateSliderProjects.totalItem = props.info_project.length
useObserver({
    el: containerRef,
    onDown: () => handleOnDown({ dir: 1 }),
    onUp: () => handleOnUp({ dir: -1 }),
    conditionInit: computed(() => stateUiGlobal.isActivePage)
})

</script>