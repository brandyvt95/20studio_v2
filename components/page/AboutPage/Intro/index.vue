<template>
    <section :class="s.section">
        <div :class="s.container">
            <ul :class="s.gridImage">
                <li :class="s.image">
                    <img src="/images/clone/aboutus/intro_1.jpg" alt="" />
                </li>
                <li :class="s.image">
                    <img src="/images/about/intro2.png" alt="" />
                </li>
                <li :class="s.image">
                    <img src="/images/about/intro3.png" alt="" />
                </li>
            </ul>
            <div :class="s.text">
                <TypoParagraph tag="p" font="BS-Medium" :class="s.label">
                    <!--  <IconSVG src='/icon/star.svg' :class={s.s.icon}/> -->
                    {{ content.title }}
                </TypoParagraph>
                <TypoHeading tag="h3" size="h2" font="BS-Medium" :class="s.title">{{ content.des }}</TypoHeading>
                <ul :class="s.body">
                    <li>
                        <TypoParagraph tag="p" font="BS-Medium">{{ content.jobDes[0] }} &amp; {{ content.jobDes[1] }}
                        </TypoParagraph>
                    </li>
                    <li>
                        <TypoParagraph tag="p" font="BS-Medium">{{ content.jobDes[2] }} &amp; {{ content.jobDes[3] }}
                        </TypoParagraph>
                    </li>
                    <li>
                        <TypoParagraph tag="p" font="BS-Medium">{{ content.jobDes[4] }} &amp; {{ content.jobDes[5] }}
                        </TypoParagraph>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script setup>
import TypoHeading from '~/components/common/Typo/TypoHeading.vue';
import TypoParagraph from '~/components/common/Typo/TypoParagraph.vue';
import s from './style.module.css'
defineProps({
    content: Object
})
</script>