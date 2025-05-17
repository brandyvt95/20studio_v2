<template>
    <section :class="[s.aboutus_us, s.dark_background]">
        <div :class="s.container">
            <TypoParagraph tag="p" font="BD-Medium" :class="s.label">
                <StarIcon :class="s.icon" />
                <span>{{ content.tag }}</span>
            </TypoParagraph>
            <TypoHeading tag="h2" size="h2" font="BD-Medium" :class="s.title">
                <span v-for="(item, index) in content.TitleSplit" :key="index"> {{ item.row }}</span>
            </TypoHeading>
            <TypoParagraph tag="p" size="h4" font="BS-Regular" :class="s.body">
                {{ content.paragraph }}
            </TypoParagraph>
            <div :class="s.images">
                <div :class="s.image">
                    <img src="/images/about/us1.png" alt="" />
                </div>
                <div :class="s.image">
                    <img src="/images/about/us2.png" alt="" />
                </div>
            </div>
            <TypoParagraph tag="blockquote" size="subtitle" :class="s.quote">
                {{ content.qoute }}
            </TypoParagraph>
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