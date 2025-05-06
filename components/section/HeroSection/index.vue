<script setup>
import s from './style.module.css'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';

import ParallaxBackground from '~/components/animation/ParallaxBackground/index.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import SplitText from '~/components/animation/Text/Split/index.vue';
defineProps({
    content: Object
})
</script>

<template>
    <section :class="s.hero_section">
        <div :class="s.container">
            <div :class="s.text_1">
                <TypoParagraph tag="p" font="BS-Regular" :className="s.intro">
                    <!-- <div v-for="(item, index) in content.paraIntro" :key="index">
                        <span>{{ item }}</span>
                    </div> -->
                </TypoParagraph>
                <TypoHeading tag="h1" font="BD-Bold" :className="s.title">
                    <div v-for="(item, index) in content.tit" :key="index">
                        <span>{{ item }}</span>
                    </div>
                </TypoHeading>

            </div>
            <div :class='s.text_2'>

                <SplitText v-if="stateUiGlobal.isActivePage" tag="p" font="BS-Regular" :className="s.body" type="lines">
                    {{ content.morePara }}
                </SplitText>


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
        <ParallaxBackground >
            <div :class="s.background" :style="{ backgroundImage: `url(${content.backgroundImage.url})` }"></div>
        </ParallaxBackground>
      
    </section>
</template>