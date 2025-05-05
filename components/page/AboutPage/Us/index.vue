<template>
<section  :class="[s.aboutus_us,s.dark_background]" >
            <div  :class="s.container">
                <h2   :class="s.label">
                    <svg  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" :class="s.icon">
                        <path  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
                    </svg>
                    <div  :class="s.text">{{ content.tag }}</div>
                </h2>  
                <h3 :class="s.title">
                    <div :class="s.title_mask">
                        <div :class="s.title_line">  {{ content.title[0] }}</div>
                    </div>
                    <div :class="s.title_mask">
                        <div :class="s.title_line">  {{ content.title[1] }}</div>
                    </div>
                    <div :class="s.title_mask">
                        <div :class="s.title_line">  {{ content.title[2] }}</div>
                    </div>
                </h3>
                <div :class="s.body">
                    <p>  {{ content.para }}</p>
                </div>
                <div :class="s.images">
                    <div :class="s.image" >
                     <!--    <Image
                            src="/about/us1.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        /> -->
                    </div>
                    <div :class="s.image">
                     <!--    <Image
                            src="/about/us2.png"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 2"
                        /> -->
                    </div>
                </div>
                <blockquote :class="s.quote">
                    {{ content.qoute }}
                </blockquote>
            </div>
        </section>
</template>
<script setup>
    import s from './style.module.css'
    defineProps({
        content: Object
    })
</script>