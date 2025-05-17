<template>
    <section :class="s.section" data-scopeCursor="close">
        <div :class="s.container">
            <div :class="s.image">
                <img :src="content.images[0].url" alt="" />
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
                            {{ info_company.Contact.mail }}
                        </ButtonBasic>

                    </li>
                    <li :class="s.contact_item">
                        <ButtonBasic to='/' :class="s.link">
                            {{ info_company.Contact.phone }}
                        </ButtonBasic>

                    </li>
                </ul>
            </div>
            <div :class="s.right">
                <TypoParagraph tag="p" :class="s.address">
                    {{ info_company.Location.street }},<br />
                    {{ info_company.Location.ward }},<br />
                    {{ info_company.Location.city }}.
                </TypoParagraph>

                <ButtonBasic :to='info_company.Location.link' :class="s.link">
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
    content: Object,
    info_company:Object
})
console.log(data.info_company)
</script>