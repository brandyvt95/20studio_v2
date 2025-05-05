<template>
    <section :class="s.list_services">
        <div :class="s.container">
            <div :class="s.tag">
                <span>
                    <!--  <IconSVG src='/icon/star.svg' /> -->
                </span>
                <h3>{{ content.tag }}</h3>
            </div>
            <div :class="s.more">
                <p>{{ content.des }}
                </p>
            </div>
            <div :class="s.list">
                <div :class="[s.waperList, s.listHover]">
                    <div :class="s.scope">
                        <h2>{{ content.jobDes[0] }} & <br /> {{ content.jobDes[1] }} & {{ content.jobDes[2] }}</h2>

                    </div>
                    <div :class="s.scope">
                        <h2>{{ content.jobDes[3] }}</h2>

                    </div>
                    <div :class="s.scope">
                        <h2>{{ content.jobDes[4] }}</h2>

                    </div>
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