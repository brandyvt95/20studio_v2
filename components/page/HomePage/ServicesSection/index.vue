<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import s from './style.module.css'
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';

const data = defineProps({
    content: Object
})

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
                <div data-scopeCursor="View" :class="s.service" v-for="(work, index) in content.works" :key="index">
                    <div :class="s.block">
                        <!--  <img :src="work.img" width={0} height={0}  alt="image_cache_services1" /> -->
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
                </div>
            </div>
        </div>
    </section>
</template>