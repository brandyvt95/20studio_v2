<template>
    <section :class="s.section" data-scopeCursor="close">
        <div :class="s.container">
            <div :class="s.image">
                <img src="/images/home/banner.png" alt="" />
            </div>

            <SlideLoop>

                {{ content.titleSlide }}

            </SlideLoop>


            <div :class="s.left">
                <TypoParagraph font='BS-Regular' tag="p" size="psmall" :class="s.body">
                    {{ content.intro }}

                </TypoParagraph>
                <ul :class="s.contact">
                    <li :class="s.contact_item">
                        <ButtonBasic to='/' :class="s.link">
                            {{ content.info_companies.Contact.mail }}
                        </ButtonBasic>

                    </li>
                    <li :class="s.contact_item">
                        <ButtonBasic to='/' :class="s.link">
                            {{ content.info_companies.Contact.phone }}
                        </ButtonBasic>

                    </li>
                </ul>
            </div>
            <div :class="s.right">
                <TypoParagraph tag="p" :class="s.address">
                    {{ content.info_companies.Location.street }},<br />
                    {{ content.info_companies.Location.ward }},<br />
                    {{ content.info_companies.Location.city }}.
                </TypoParagraph>

                <ButtonBasic :to='content.info_companies.Location.link' :class="s.link">
                    {{ content.ButtonAction.name }}
                </ButtonBasic>


            </div>
        </div>
    </section>
</template>
<script setup>
import SlideLoop from './SlideLoop.vue'
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import ButtonBasic from '~/components/animation/Button/Basic/index.vue'
import s from './style.module.css'
const data = defineProps({
    content: Object
})
console.log(data.content)
</script>