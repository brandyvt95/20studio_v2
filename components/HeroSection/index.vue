<script setup>
    import './style.css'

    defineProps({
        content: Object
    })
</script>

<template>
    <section class='hero_section'>
        <div class="container">
            <div class="text_1">
                <p v-if="!content.disableParaIntro" class="intro">
                    <span v-for="(item, index) in content.paraIntro" :key="index">
                        <span class="ip">{{ item }}</span>
                    </span>
                </p>

                <h1 class="title">
                    <span v-for="(item, index) in content.tit" :key="index">
                        <span class="tp">{{ item }}</span>
                    </span>
                </h1>
            </div>
            <div class='text_2'>
                <div class='body'>
                    <p><span class="">{{ content.morePara }}</span></p>

                </div>

           <!--      <ul class='list1'>
                    <li v-for="(item, index) in content.listBtn" :key="index" class="list_item">
                        <NuxtLink class="list_link" :to="content.listBtnUrl[item]">
                            {{ item }}
                        </NuxtLink>
                    </li>

                </ul> -->

                <ul class='list2'>

                    <li class='list_item'>
                        <a class='list_link'>
                            {{ content.infoContact.mail.text }}
                        </a>
                    </li>
                    <li class='list_item'>
                        <a class='list_link'>
                            {{ content.infoContact.phone.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="background" :style="{ backgroundImage: `url(${content.backgroundImage.url})` }"></div>
    </section>
</template>