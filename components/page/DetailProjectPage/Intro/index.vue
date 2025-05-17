<template>
    <section :class="s.IntroWorkPage">
        <div :class="s.background" :style="{ backgroundImage: `url(${content.background.url})` }"></div>
        <div :class="s.container">
            <div :class="s.text_1">
                <SlideMotion :direction="1" :rotate="7" :duration="1" :class="s.title">
                    <span>{{ content.brand }}</span>
                    <span>{{ content.type }}</span>
                </SlideMotion>
                <!--          <h2 :class="s.subtitle">
                        <div :class="s.text_line">
                            <span>Celebrating a Century of Cinema</span>
                        </div>
                    </h2> -->
            </div>
            <div :class="s.text_2">
                <p :class="s.intro">{{ content.DetailProject.intro }}</p>
                <div :class="s.info">
                    <span :class="s.client">{{ content.DetailProject.challenge }}</span>
                    <ul :class="s.services">
                        <li v-for="(role, index) in content.DetailProject?.Role" :key="index" :class="s.service">
                            {{ role.name }}
                        </li>

                    </ul>
                    <ul :class="s.industries">
                        <li :class="s.industry">
                            {{ content.DetailProject.client }}
                        </li>
                    </ul>
                    <time :class="s.date">{{ content.DetailProject.date }} - {{ content.DetailProject.duration }}</time>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import SlideMotion from '~/components/animation/Text/SlideMotion/index.vue';
import s from './style.module.css'
const props = defineProps({
    content: Object
})


</script>
