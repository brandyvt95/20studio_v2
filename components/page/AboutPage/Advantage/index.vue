<template>
    <section :class="s.section">
        <div :class="s.container">
            <TypoParagraph tag="p" font="BD-Medium" :class="s.label">
                <StarIcon :class="s.icon" /> 
                {{ content.tag }}
            </TypoParagraph>
            <TypoParagraph tag="p" font="BS-Medium" :class="s.intro">
                {{ content.paragraph }}
            </TypoParagraph>
            <div :class="s.items">
                <div v-for="(item, index) in content.advantage" :key="index" :class="s.item">
                    <TypoParagraph tag="span" font="BS-Regular" v-if="!content.disableIndex" :class="s.index">{{ index + 1 }}</TypoParagraph>
                    <TypoHeading tag="h3" size="h2" font="BD-Regular" :class="s.subtitle">{{ item.title }}</TypoHeading>
                    <TypoParagraph tag="p" font="BS-Medium"  :class="s.body">
                       {{ item.paragraph }}
                    </TypoParagraph>
                </div>
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