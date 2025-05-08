<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import s from './style.module.css'
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue';
const data = defineProps({
    content: Object
})
console.log(data.content.works)
</script>
<template>
    <section :class="s.section" data-scopeCursor="close"> 
        <div :class="s.container" >
            <div :class="s.head">
                <TypoHeading tag="p" size="psmall" font="BS-Regular" :className="s.lable">
                    {{ content.content.tag }}
                </TypoHeading>
                <TypoHeading tag="h2" size="h1" font="BD-Medium" :className="s.title">
                    {{ content.content.title }}
                </TypoHeading>
                <TypoParagraph tag="p"  font="BS-Regular" :className="s.body">
                    {{ content.content.des }}
                </TypoParagraph>
            </div>
            <div :class="s.services">
                <ButtonBasic :to="`/projects/${work.slug}`" data-scopeCursor="View" :class="s.service" v-for="(work, index) in content.works" :key="index">
                    <div :class="s.block">
                         <img :src="work.img"  alt="" />
                    </div>
                    <div :class="s.w_info">
                        <p :class="s.info">
                            <TypoParagraph tag="span" font="BS-Medium">
                                {{ work.clientName }} - 
                            </TypoParagraph>
                            <TypoParagraph tag="span" font="BD-Medium">
                                {{ work.jobDes }} - 
                            </TypoParagraph>
                        </p>
                    </div>
                </ButtonBasic>
            </div>
        </div>
    </section>
</template>