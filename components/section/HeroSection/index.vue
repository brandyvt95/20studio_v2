<script setup>
import s from './style.module.css'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';

import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';

defineProps({
    content: Object
})
</script>

<template>
    <section :class="s.hero_section">
        <div :class="s.container">
            <div :class="s.text_1">
                <TypoParagraph v-if="!content.disableParaIntro" tag="p" font="BS-Regular" :className="s.intro">
                    <span v-for="(item, index) in content.paraIntro" :key="index">
                        <span :class="s.ip">{{ item }}</span>
                    </span>
                </TypoParagraph>
                <TypoHeading tag="h1" font="BD-Bold" :className="s.title">
                    <span v-for="(item, index) in content.tit" :key="index">
                        <span :class="s.tp">{{ item }}</span>
                    </span>
                </TypoHeading>

            </div>
            <div :class='s.text_2'>
                <TypoParagraph tag="p" font="BS-Regular" :className="s.body">
                    {{ content.morePara }}
                </TypoParagraph>
                <ul :class='s.list1'>
                    <li v-for="(item, index) in content.listBtn" :key="index" :class="s.list_item">
                        <NuxtLink :to="content.listBtnUrl[item]">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ item }}
                            </TypoParagraph>
                        </NuxtLink>
                    </li>
                </ul>
                <ul :class='s.list2'>
                    <li :class='s.list_item'>
                        <NuxtLink>
                            <TypoParagraph tag="span" font="BS-Medium">
                                {{ content.infoContact.mail.text }}
                            </TypoParagraph>
                        </NuxtLink>
                    </li>
                    <li :class='s.list_item'>
                        <NuxtLink>
                            <TypoParagraph tag="span" font="BS-Medium">
                                {{ content.infoContact.phone.text }}
                            </TypoParagraph>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div :class="s.background" :style="{ backgroundImage: `url(${content.backgroundImage.url})` }"></div>
    </section>
</template>