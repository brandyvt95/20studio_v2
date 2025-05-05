<template>
    <section :class="[s.aboutus_intro, s.light_background]">
        <div :class="s.container">
            <ul :class="s.images">
                <li :class="s.image">
                    <!--   <Image
                        loading="eager" 
                            src="/clone/aboutus/intro_1.jpg"
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ width: "100%", height: "auto" }}
                            alt="intro_aboutus 1"
                        /> -->

                </li>

            </ul>
            <div :class="s.text">
                <h2 :class="s.label">
                    <!--  <IconSVG src='/icon/star.svg' :class={s.s.icon}/> -->
                    {{ content.title }}
                </h2>
                <h2 :class="s.title">{{ content.des }}</h2>
                <div :class="s.body">
                    <ul>
                        <li>
                            <p>{{ content.jobDes[0] }} &amp; {{ content.jobDes[1] }}</p>
                        </li>
                        <li>
                            <p>{{ content.jobDes[2] }} &amp; {{ content.jobDes[3] }}</p>
                        </li>
                        <li>
                            <p>{{ content.jobDes[4] }} &amp; {{ content.jobDes[5] }}</p>
                        </li>
                    </ul>
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