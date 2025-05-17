<script setup>
import s from './style.module.css'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue';
import ButtonHoverLineVer1 from '~/components/animation/Button/HoverLineVer1/index.vue';
import ButtonHoverLineVer2 from '~/components/animation/Button/HoverLineVer2/index.vue';
import ParallaxBackground from '~/components/animation/ParallaxBackground/index.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import MotionHeadHero from '~/components/animation/Text/MotionHeadHero.vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
    content: {
        type: Object,
        required: true
    },
    info_navbar: {
        type: Object,
        required: true
    },
    info_company: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <section :class="[s.section, 'clr-white']">
        <div :class="s.container">
            <div :class="s.intro">
                <TypoHeading tag="h1" size="h1" font="BD-Bold" :className="s.title">
                    <MotionHeadHero v-if="content?.TitleSplit" targetMask="wrapper-word-hero-span" targetChild="word-hero-span">
                        <span v-for="(word, index) in content.TitleSplit || []" :key="index"
                            class="wrapper-word-hero-span">
                            <span class="word-hero-span">{{ word.row }}</span>
                        </span>
                    </MotionHeadHero>
                </TypoHeading>

            </div>
            <div :class='s.detail' v-if="stateUiGlobal.isActivePage">

                <TypoParagraph tag="p" size="h4" font="BS-Regular" :className="s.paragraph">
                    {{ content?.paragraph || 'Lorem' }}
                </TypoParagraph>
                <ButtonHoverLineVer2 :to="content.ButtonAction.slug" :class="s.link" data-scopeCursor="close">
                    <TypoParagraph tag="p" font="BS-Medium">
                        {{ content?.ButtonAction?.name || 'Lorem' }}
                    </TypoParagraph>
                </ButtonHoverLineVer2>
                <ul :class='s.menu' data-scopeCursor="close">
                    <li v-for="(item, index) in info_navbar?.NavbarItem" :key="index" :class="s.item">
                        <ButtonHoverLineVer1 :to="item.slug" v-if="item.slug !== route.path">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ item.label }}
                            </TypoParagraph>
                        </ButtonHoverLineVer1>
                    </li>
                </ul>
                <ul :class='s.contact' data-scopeCursor="close">
                    <li :class='s.item'>
                        <ButtonBasic to="/">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ info_company?.Contact.mail }}
                            </TypoParagraph>
                        </ButtonBasic>
                    </li>
                    <li :class='s.item'>
                        <ButtonBasic to="/">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ info_company?.Contact.phone }}
                            </TypoParagraph>
                        </ButtonBasic>
                    </li>
                </ul>
            </div>
        </div>
        <ParallaxBackground v-if="content?.background?.url">
            <div :class="s.background" :style="{ backgroundImage: `url(${content.background.url})` }"></div>
        </ParallaxBackground>

    </section>
</template>