<template>
    <section :class="[s.aboutus_minded ,s.light_background]">
        <div :class="s.container">
            <h2 :class="s.label">
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon">
                    <path
                        d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                        fill="currentColor"></path>
                </svg>
                <div :class="s.text">{{ content.tag }}</div>
            </h2>
            <h2 :class="s.title">
                <div :class="s.title_mask">
                    <div :class="s.title_line">{{ content.title[0] }}</div>
                </div>
                <div :class="s.title_mask">
                    <div :class="s.title_line">{{ content.title[1] }}</div>
                </div>

            </h2>
            <div :class="s.body">
                <p>{{ content.para[0] }}</p>
                <p>{{ content.para[1] }}</p>
            </div>
            <blockquote :class="s.quote">
                {{ content.qoute }}
            </blockquote>
        </div>
        <div :class="s.imgBox">
            <div :class="s.image">
                <div :class="s.w_img">
                 
                </div>
            </div>
            <div :class="s.background">
                <div :class="s.dark"></div>
                <div :class="s.light"></div>
            </div>
        </div>

    </section>
</template>
<script setup>
import s from './style.module.css'
defineProps({
    content: Object
})
</script>