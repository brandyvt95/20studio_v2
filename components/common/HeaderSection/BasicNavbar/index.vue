<script setup>
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import Button from './Button/index.vue'
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import s from './style.module.css'
</script>
<template>
    <Button />
    <nav :class='s.nav' :id="s.navbar_deskop">
        <span :class='s.this_icon'>
            <img src='/images/icon/star.svg' />
        </span>
        <ul :class='s.nav_list'>
            <li :class='s.nav_item'>

                <ButtonBasic to="/">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Home
                    </TypoParagraph>
                </ButtonBasic>
            </li>
            <li :class='s.nav_item'>
                <ButtonBasic to="/sustainability">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Sustain
                    </TypoParagraph>
                </ButtonBasic>
            </li>
            <li :class='s.nav_item'>
                <ButtonBasic to="/projects">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Project
                    </TypoParagraph>
                </ButtonBasic>
            </li>
            <li :class='s.nav_item'>
                <ButtonBasic to="/about">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        About us
                    </TypoParagraph>
                </ButtonBasic>
            </li>
            <li :class='s.nav_item'>
                <ButtonBasic to="/services">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Service
                    </TypoParagraph>
                </ButtonBasic>
            </li>
            <li :class='s.nav_item'>
                <ButtonBasic to="/contact">
                    <TypoParagraph tag="p" size="small" font="BD-Medium">
                        Contact
                    </TypoParagraph>
                </ButtonBasic>
            </li>
        </ul>
    </nav>
</template>
