<template>
    <section :class="s.section">
        <div :class="s.items">
            <ul>
                <li v-for="(item, index) in grouped.slug" :key="index">
                    <ButtonBasic :to="`/projects/${item}`">{{ item }}</ButtonBasic>
                </li>
            </ul>
            <ul>
                <li v-for="(item, index) in grouped.brand" :key="index">
                    <TypoHeading tag="h3" size="h2" font="BD-Regular">
                        {{ item }}
                    </TypoHeading>
                </li>
            </ul>
            <ul>
                <li v-for="(item, index) in grouped.jobDes" :key="index">
                    <TypoParagraph tag="p" font="BS-Regular">
                        {{ item }}
                    </TypoParagraph>
                </li>
            </ul>
            <ul>
                <li v-for="(item, index) in grouped.thumb" :key="index">
                    <img :src="item" :alt="item.name" :class="s.thumb" />
                </li>
            </ul>
            <ul>
                <li v-for="(item, index) in grouped.background" :key="index">
                    <img :src="item" :alt="item.name" :class="s.thumb" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
import { formatData } from './utils'
const props = defineProps({
    content: Object
})

const grouped = formatData(props.content)
</script>