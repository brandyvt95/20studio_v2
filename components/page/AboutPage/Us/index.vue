<template>
<section  :class="[s.aboutus_us,s.dark_background]" >
            <div  :class="s.container">
                <TypoParagraph tag="p" font="BS-Medium"  :class="s.label">
                    <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon">
                        <path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
                    </svg>
                    <span>{{ content.tag }}</span>
                </TypoParagraph>  
                <TypoHeading tag="h2" size="h2" font="BD-Medium" :class="s.title">
                    <span>  {{ content.title[0] }}</span>
                    <span>  {{ content.title[1] }}</span>
                    <span>  {{ content.title[2] }}</span>
                </TypoHeading>
                <TypoParagraph tag="p" size="h4" font="BS-Regular" :class="s.body">
                     {{ content.para }}
                </TypoParagraph>
                <div :class="s.images">
                    <div :class="s.image" >
                        <img
                            src="/images/about/us1.png"
                            alt=""
                        />
                    </div>
                    <div :class="s.image">
                        <img
                            src="/images/about/us2.png"
                            alt=""
                        />
                    </div>
                </div>
                <TypoParagraph tag="blockquote" size="subtitle" :class="s.quote">
                    {{ content.qoute }}
                </TypoParagraph>
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