<template>
    <nav class='nav' id='navbar_deskop'>
        <span class='this_icon'>
            <img src='/images/icon/star.svg' />
        </span>
        <ul class='nav_list'>
            <li class='nav_item'>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/">Sustain</NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/">Project</NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/about">About us</NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/">Service</NuxtLink>
            </li>
            <li class='nav_item'>
                <NuxtLink to="/">Contact</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script>
import './style.css'
</script>