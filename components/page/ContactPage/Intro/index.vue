<template>
    <section :class="s.section" data-scopeCursor="close">
        <div :class="s.container">
            <div :class="s.image">
                <img src="/images/home/banner.png" alt="" />
            </div>

            <SlideLoop>

                Get in touch · 联系 · Liên lạc · Связаться · Contactum
                facere · Prendre contact · Get in touch · 联系 · Liên lạc · 연락하다 · Prendre contact
                · Связаться · اتصل

            </SlideLoop>


            <div :class="s.left">
                <TypoParagraph font='BS-Regular' tag="p" size="psmall" :class="s.body">
                    {{ content.des }}

                </TypoParagraph>
                <ul :class="s.contact">
                    <li :class="s.contact_item">
                        <ButtonBasic to='/' :class="s.link">
                            {{ content.mail }}
                        </ButtonBasic>

                    </li>
                    <li :class="s.contact_item">
                        <ButtonBasic to='/' :class="s.link">
                            {{ content.phone }}
                        </ButtonBasic>

                    </li>
                </ul>
            </div>
            <div :class="s.right">
                <ButtonBasic to='/' :class="s.address">
                    {{ content.location[0] }}<br />
                    {{ content.location[1] }}<br />
                    {{ content.location[2] }}
                </ButtonBasic>

                <ButtonBasic to='/' :class="s.link">
                    {{ content.more }}
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
defineProps({
    content: Object
})
</script>