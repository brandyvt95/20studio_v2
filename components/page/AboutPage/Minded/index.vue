<template>
    <section :class="s.section">
        <div :class="s.container">
            <TypoParagraph tag="p" font="BD-Medium" :class="s.label">
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon">
                    <path
                        d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                        fill="currentColor"></path>
                </svg>
                <span :class="s.text">{{ content.tag }}</span>
            </TypoParagraph>
            <TypoHeading tag="h3" size="h1" font="BD-Regular" :class="s.title">
                <span>{{ content.title[0] }}</span>
                <span>{{ content.title[1] }}</span>
            </TypoHeading>

            <TypoParagraph tag="p" font="BS-Medium" :class="s.body">
                <span>{{ content.para[0] }}</span>
                <span>{{ content.para[1] }}</span>
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
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
defineProps({
    content: Object
})
</script>