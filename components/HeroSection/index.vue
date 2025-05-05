<script setup>
import './style.css'
import TypoHeading from '~/componentCommon/Typo/TypoHeading.vue';

import TypoParagraph from '~/componentCommon/Typo/TypoParagraph.vue';

defineProps({
    content: Object
})
</script>

<template>
    <section class='hero_section'>
        <div class="container">
            <div class="text_1">
                <TypoParagraph v-if="!content.disableParaIntro" tag="p" font="BS-Regular" className="intro">
                    <span v-for="(item, index) in content.paraIntro" :key="index">
                        <span class="ip">{{ item }}</span>
                    </span>
                </TypoParagraph>
                <TypoHeading tag="h1" font="BD-Bold" className="title">
                    <span v-for="(item, index) in content.tit" :key="index">
                        <span class="tp">{{ item }}</span>
                    </span>
                </TypoHeading>

            </div>
            <div class='text_2'>
                <TypoParagraph tag="p" font="BS-Regular" className="body">
                    {{ content.morePara }}
                </TypoParagraph>


                <ul class='list1'>
                    <li v-for="(item, index) in content.listBtn" :key="index" class="list_item">
                        <NuxtLink :to="content.listBtnUrl[item]">
                            <TypoParagraph tag="p" font="BS-Medium">
                                {{ item }}
                            </TypoParagraph>
                        </NuxtLink>
                    </li>

                </ul>

                <ul class='list2'>

                    <li class='list_item'>

                        <NuxtLink>
                            <TypoParagraph tag="span" font="BS-Medium">
                                {{ content.infoContact.mail.text }}
                            </TypoParagraph>
                        </NuxtLink>



                    </li>
                    <li class='list_item'>
                        <NuxtLink>
                            <TypoParagraph tag="span" font="BS-Medium">
                                {{ content.infoContact.phone.text }}
                            </TypoParagraph>
                        </NuxtLink>

                    </li>
                </ul>
            </div>
        </div>
        <div class="background" :style="{ backgroundImage: `url(${content.backgroundImage.url})` }"></div>
    </section>
</template>