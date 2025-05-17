<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import s from './style.module.css'
import StarIcon from '~/components/common/InlineSvg/Star.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue';
import SlideMotion from '~/components/animation/Text/SlideMotion/index.vue';
const data = defineProps({
    content: Object,
    info_project: Object
})
</script>
<template>
    <section :class="[s.section, 'bgclr-white', 'clr-story']" data-scopeCursor="close">
        <div :class="s.container">
            <div :class="s.head">
                <SlideMotion :useScrollTrigger="true" :direction="1" :rotate="7" :duration="1" :className="s.title">
                    <TypoHeading tag="h2" size="h1" font="BD-Bold">
                        {{ content.title }}
                    </TypoHeading>
                </SlideMotion>
                <TypoHeading tag="p" size="psmall" font="BS-Regular" :className="s.lable">
                    <StarIcon :class="s.icon" />
                    {{ content.tag }}
                </TypoHeading>

                <TypoParagraph tag="p" size="h4" font="BS-Regular" :className="s.body">
                    {{ content.paragraph }}
                </TypoParagraph>
            </div>
            <div :class="s.services" ref="wrapper">
                <ButtonBasic color="clr-story" :to="`/projects/${work.slug}`" data-scopeCursor="View" :class="s.service"
                    v-for="(work, index) in info_project.List" :key="index">
                    <div :class="s.block">
                        <!--  <img :src="work.thumbnail.url" alt="" /> -->
                    </div>
                    <div :class="s.w_info">
                        <TypoParagraph tag="p" font="BS-Medium" :class="s.info">
                            <span>
                                {{ work.brand }} {{ work.type }}-
                            </span>
                            <span class="clr-dark-grey--06" :style="{ fontStyle: 'italic' }">
                                {{ work.job_description }}
                            </span>
                        </TypoParagraph>
                    </div>
                </ButtonBasic>
            </div>
        </div>
    </section>
</template>