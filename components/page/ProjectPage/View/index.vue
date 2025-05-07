<template>
    <section :class="s.section" ref="containerRef" data-scopeCursor="View">
        <div :class="s.items">
            <div :class="s.detailGr">
                <MotionHead :dataTitle="data.brand" :dataParagraph="data.jobDes" :yTarget="40" :duration=".42" easeIn="power3.out" easeOut="power3.out">
                    <TypoHeading  tag="h3" size="h2" font="BD-Regular">
                      {{ data.brand[0] }}
                    </TypoHeading>
                    <TypoParagraph  tag="p" font="BS-Regular">
                        {{ data.jobDes[0] }}
                    </TypoParagraph>
                </MotionHead>
            </div>
            <MotionMask :classs="s.thumbGr" :dirRevert="1" :duration="1" ease="power3.inOut">
                <li v-for="(item, index) in data.thumb" :key="index" :class="s.thumb">
                    <img :src="item" :alt="item.name" />
                </li>
            </MotionMask>

            <MotionMask :classs="s.backgroundGr" :dirRevert="-1" :duration="1" ease="power3.inOut">
                <li v-for="(item, index) in data.background" :key="index" :class="s.background" id="slide">
                    <ButtonBasic :to="`/projects/${data.slug[index]}`">
                        <img :src="item" :alt="item.name" />
                    </ButtonBasic>
                </li>
            </MotionMask>
            <div :class="s.indi">
                <MotionText :yTarget="10" :duration=".6" easeIn="power2.in" easeOut="power2.out">
                    <TypoParagraph tag="span" font="BS-Regular" :class="s.cur"></TypoParagraph>
                </MotionText>
                <TypoParagraph tag="span" font="BS-Regular" :class="s.total"> / 0{{ props.content.length }}
                </TypoParagraph>
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
import MotionText from './Slide/MotionText.vue';
import MotionHead from './Slide/MotionHead.vue';
const props = defineProps({
    content: Object
})
const data = formatData(props.content)
const containerRef = ref(null)
stateSliderProjects.totalItem = props.content.length
useObserver({
    el: containerRef,
    onDown: () => handleOnDown({ dir: 1 }),
    onUp: () => handleOnUp({ dir: -1 }),
    conditionInit: computed(() => stateUiGlobal.isActivePage)
})
</script>