<script setup>
import TypoParagraph from '~/componentCommon/Typo/TypoParagraph.vue';
import './style.css'
</script>
<template>
    <nav class='nav' id='navbar_deskop'>
        <span class='this_icon'>
            <img src='/images/icon/star.svg' />
        </span>
        <ul class='nav_list'>
            <li class='nav_item'>
                <NuxtLink to="/">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Home
                    </TypoParagraph>
                </NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/about">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Sustain
                    </TypoParagraph>
                </NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Project
                    </TypoParagraph>
                </NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/about">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        About us
                    </TypoParagraph>
                </NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Service
                    </TypoParagraph>
                </NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Contact
                    </TypoParagraph>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
