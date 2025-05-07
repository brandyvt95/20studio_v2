<template>
    <section :class="s.section">
        <div :class="s.container">
            <TypoParagraph tag="p" font="BS-Medium" :class="s.label">
                <!-- <IconSVG src='/icon/star.svg' class={s.icon} /> -->
                {{ content.tag }}
            </TypoParagraph>
            <TypoParagraph tag="p" font="BS-Medium" :class="s.intro">
                {{ content.more }}
            </TypoParagraph>
            <div :class="s.items">
                <div v-for="(item, index) in content.items" :key="index" :class="s.item">
                    <TypoParagraph tag="span" font="BD-Regular" v-if="!content.disableIndex" :class="s.index">{{ index + 1 }}</TypoParagraph>
                    <TypoHeading tag="h3" size="h2" font="BD-Regular" :class="s.subtitle">{{ item[0] }}</TypoHeading>
                    <TypoParagraph tag="p" font="BS-Medium"  :class="s.body">
                       {{ item[1] }}
                    </TypoParagraph>
                </div>
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