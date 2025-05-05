<script setup>
import TypoHeading from '~/componentCommon/Typo/TypoHeading.vue';

import './style.css'
import TypoParagraph from '~/componentCommon/Typo/TypoParagraph.vue';

const data = defineProps({
    content: Object
})

</script>
<template>
    <section class="servcies_section light_background">
        <div class="container">
            <div className="text">
                <TypoHeading tag="p" font="BS-Regular" className="lable">
                    {{ content.content.tag }}
                </TypoHeading>
                <TypoHeading tag="h1" font="BD-Medium" className="title">
                    {{ content.content.title }}
                </TypoHeading>
                <TypoParagraph tag="p" font="BS-Regular" className="body">
                    {{ content.content.des }}
                </TypoParagraph>
            </div>
        </div>
        <div class="services">
            <div class="service" v-for="(work, index) in content.works" :key="index">
                <div class="block">
                    <!--  <img :src="work.img" width={0} height={0}  alt="image_cache_services1" /> -->
                </div>
                <div class="w_info">
                    <p class="info">
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
    </section>
</template>
<style lang="">

</style>