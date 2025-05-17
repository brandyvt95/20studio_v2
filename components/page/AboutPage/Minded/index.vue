<template>
    <section :class="[s.section, 'bgclr-white clr-dark-grey']">
        <div :class="s.container">
            <TypoParagraph tag="p" font="BD-Medium" :class="s.label">
                <StarIcon :class="s.icon" />
                <span :class="s.text">{{ content.tag }}</span>
            </TypoParagraph>
            <TypoHeading tag="h3" size="h1" font="BD-Regular" :class="s.title">
                <span v-for="(item, index) in content.TitleSplit" :key="index">{{ item.row }}</span>
            </TypoHeading>

            <TypoParagraph tag="p" font="BS-Medium" :class="s.body">
                {{ content.paragraph }}
            </TypoParagraph>

            <TypoParagraph tag="blockquote" size="subtitle" font="BS-Medium" :class="s.quote">
                {{ content.qoute }}
            </TypoParagraph>
        </div>
        <div :class="s.imgBox">
            <div :class="s.image">
                <div :class="s.w_img">
                    <img src="/images/about/minded.png" alt="" />
                </div>
            </div>
            <div :class="s.background">
                <div :class="s.dark"></div>
                <div :class="s.light"></div>
            </div>
        </div>

    </section>
</template>
<script setup>
import StarIcon from '~/components/common/InlineSvg/Star.vue';
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
defineProps({
    content: Object
})
</script>