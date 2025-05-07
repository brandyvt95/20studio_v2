<script setup>
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import Button from './Button/index.vue'
import Icon from './Icon/index.vue'
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import s from './style.module.css'
const data = defineProps({
  content: Object
})
</script>
<template>
    <Button />
    <nav :class='s.nav' :id="s.navbar_deskop" data-scopeCursor="close">
        <Icon :content="data.content.menuDeskop"/>
        <ul :class='s.nav_list'>
            <li :class='s.nav_item' v-for="(url, label) in data.content.menuDeskop" :key="label">
                <ButtonBasic :to="url">
                    <TypoParagraph tag="p" size="psmall" font="BD-Medium">
                        {{ label }}
                    </TypoParagraph>
                </ButtonBasic>
            </li>
        </ul>
    </nav>
</template>
