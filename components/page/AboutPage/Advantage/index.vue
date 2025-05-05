<template>
    <section :class="[s.aboutus_advantage, s.dark_background]">
        <div :class="s.container">
            <h2 :class="s.label">
                <!-- <IconSVG src='/icon/star.svg' class={s.icon} /> -->
                {{ content.tag }}
            </h2>
            <div :class="s.intro">
                <p>{{ content.more }}</p>
            </div>
            <div :class="s.items">

                <div v-for="(item, index) in content.items" :key="index" :class="s.item">
                    <span v-if="!content.disableIndex" :class="s.index">{{ index + 1 }}</span>
                    <h3 :class="s.subtitle">{{ item[0] }}</h3>
                    <div :class="s.body">
                        <p>{{ item[1] }}</p>
                    </div>
                </div>
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