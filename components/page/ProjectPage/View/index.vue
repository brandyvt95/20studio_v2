<template>
    <section :class="s.section" ref="containerRef">
        <div :class="s.items">
            <!-- <ul>
                <li v-for="(item, index) in data.slug" :key="index">
                    <ButtonBasic :to="`/projects/${item}`">{{ item }}</ButtonBasic>
                </li>
            </ul> -->
            <div :class="s.detailGr">
                <ul :class="s.brandGr">
                    <li v-for="(item, index) in data.brand" :key="index" :class="s.brand">
                        <TypoHeading tag="h3" size="h2" font="BD-Regular">
                            {{ item }}
                        </TypoHeading>
                    </li>
                </ul>
                <ul :class="s.jobDesGr">
                    <li v-for="(item, index) in data.jobDes" :key="index" :class="s.jobDes">
                        <TypoParagraph tag="p" font="BS-Regular">
                            {{ item }}
                        </TypoParagraph>
                    </li>
                </ul>
            </div>
            <MotionMask :classs="s.thumbGr" :dirRevert="1" :duration="1" ease="power3.inOut">
                <li v-for="(item, index) in data.thumb" :key="index" :class="s.thumb" >
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
            <TypoParagraph  tag="p" font="BS-Regular" :class="s.indi">
                <MotionText :yTarget="10" :duration=".6" easeIn="power2.in" easeOut="power2.out">
                    <span :class="s.cur"></span>
                </MotionText>
                <span :class="s.total"> / 0{{ props.content.length }}</span>
            </TypoParagraph>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useObserver } from '../../../../composables/page/projects/useObserve'
import { handleOnDown,handleOnUp } from '../../../../composables/page/projects/controls'
import { stateSliderProjects } from '../../../../composables/page/projects/state';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
import { formatData } from './utils'
import MotionMask from './Slide/MotionMask.vue';
import MotionText from './Slide/MotionText.vue';
const props = defineProps({
    content: Object
})
const data = formatData(props.content)
const containerRef = ref(null)
stateSliderProjects.totalItem = props.content.length
useObserver({
    el: containerRef,
    onDown: () => handleOnDown({dir:1}),
    onUp: () => handleOnUp({dir:-1}),
    conditionInit: computed(() => stateUiGlobal.isActivePage)
})
</script>