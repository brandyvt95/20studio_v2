<script setup>
import s from './style.module.css'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue';
import ParallaxBackground from '~/components/animation/ParallaxBackground/index.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import SplitText from '~/components/animation/Text/Split/index.vue';
defineProps({
    content: Object
})
</script>

<template>
    <section :class="s.section">
        <div :class="s.container">
            <div :class="s.intro">
                <TypoHeading tag="h2" size="h1" font="BD-Bold" :className="s.title">
                    <div v-for="(item, index) in content.tit" :key="index">
                        <span>{{ item }}</span>
                    </div>
                </TypoHeading>

            </div>
            <div :class='s.detail'>

                <SplitText v-if="stateUiGlobal.isActivePage" tag="p" font="BS-Regular" :className="s.paragraph"
                    type="lines">
                    {{ content.morePara }}
                </SplitText>


                <ul :class='s.menu'>
                    <li v-for="(item, index) in content.listBtn" :key="index" :class="s.item">
                        <ButtonBasic :to="content.listBtnUrl[item]">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ item }}
                            </TypoParagraph>
                        </ButtonBasic>
                    </li>
                </ul>
                <ul :class='s.contact'>
                    <li :class='s.item'>
                        <ButtonBasic to="/">
                            <TypoParagraph tag="span" font="BS-Medium">
                                {{ content.infoContact.mail.text }}
                            </TypoParagraph>
                        </ButtonBasic>
                    </li>
                    <li :class='s.item'>
                        <ButtonBasic to="/">
                            <TypoParagraph tag="span" font="BS-Medium">
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