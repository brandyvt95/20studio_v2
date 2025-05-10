<script setup>
import s from './style.module.css'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue';
import ButtonHoverLineVer1 from '~/components/animation/Button/HoverLineVer1/index.vue';
import ButtonHoverLineVer2 from '~/components/animation/Button/HoverLineVer2/index.vue';
import ParallaxBackground from '~/components/animation/ParallaxBackground/index.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import MotionHeadHero from '~/components/animation/Text/MotionHeadHero.vue';
const props = defineProps({
    content: {
        type: Object,
        required: true,
        default: () => ({ tit: '' }) 
    }
})

const splitWords = computed(() => (props.content?.tit || '').split(' '))
</script>

<template>
    <section :class="[s.section, 'clr-white']">
        <div :class="s.container">
            <div :class="s.intro">
                <TypoHeading tag="h1" size="h1" font="BD-Bold" :className="s.title">
                    <MotionHeadHero>
                        <span v-for="(word, index) in splitWords" :key="index" class="wrapper-word-span">
                            <span class="word-span">{{ word }}</span>
                        </span>
                    </MotionHeadHero>
                </TypoHeading>

            </div>
            <div :class='s.detail' v-if="stateUiGlobal.isActivePage">

                <TypoParagraph tag="p" size="h4" font="BS-Regular" :className="s.paragraph">
                    {{ content.morePara }}
                </TypoParagraph>
                <ButtonHoverLineVer2 to="/services" :class="s.link" data-scopeCursor="close">
                    <TypoParagraph tag="p" font="BS-Medium">
                        Our Service
                    </TypoParagraph>
                </ButtonHoverLineVer2>
                <ul :class='s.menu' data-scopeCursor="close">
                    <li v-for="(item, index) in content.listBtn" :key="index" :class="s.item">
                        <ButtonHoverLineVer1 :to="content.listBtnUrl[item]">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ item }}
                            </TypoParagraph>
                        </ButtonHoverLineVer1>
                    </li>
                </ul>
                <ul :class='s.contact' data-scopeCursor="close">
                    <li :class='s.item'>
                        <ButtonBasic to="/">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ content.infoContact.mail.text }}
                            </TypoParagraph>
                        </ButtonBasic>
                    </li>
                    <li :class='s.item'>
                        <ButtonBasic to="/">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ content.infoContact.phone.text }}
                            </TypoParagraph>
                        </ButtonBasic>
                    </li>
                </ul>
            </div>
        </div>
        <ParallaxBackground>
            <div :class="s.background" :style="{ backgroundImage: `url(${content.backgroundImage.url})` }"></div>
        </ParallaxBackground>

    </section>
</template>