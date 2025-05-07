<template>
<section :class="s.IntroWorkPage">
    <div :class="s.background" :style="{ backgroundImage: `url(${content.img[0]})` }"></div>
            <div :class="s.container">
                <div :class="s.text_1">
                    <h1 :class="s.title">
                        <span :class="s.ii"><span :class="s.iii">{{content.name[0]}}</span></span>
                        <span :class="s.ii"><span :class="s.iii">{{content.name[1]}}</span></span>

                    </h1>
                <!--          <h2 :class="s.subtitle">
                        <div :class="s.text_line">
                            <span :class="s.iii">Celebrating a Century of Cinema</span>
                        </div>
                    </h2> -->

                </div>
                <div :class="s.text_2">
                    <p :class="s.intro">{{content.des}}</p>
                    <div :class="s.info">
                        <span :class="s.client">{{content.challenge}}</span>
                        <ul :class="s.services">
                            <li :class="s.service">
                                {{content.role[0]}}
                            </li>
                            <li :class="s.service">
                            {{content.role[1]}}
                            </li>
                            <li :class="s.service">
                            {{content.role[2]}}
                            </li>
                            <li :class="s.service">
                            {{content.role[4]}}
                            </li>
                        </ul>
                        <ul :class="s.industries">
                            <li :class="s.industry">
                            {{content.client}}
                            </li>
                        </ul>
                        <time :class="s.date"> {{content.date}}</time>
                    </div>
                </div>
            </div>
        </section>
</template>
<script setup>
    import s from './style.module.css'
    const props = defineProps({
  content: Object
})


</script>
