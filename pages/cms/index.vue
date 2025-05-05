<template>
    <div>
      <h1>{{ story?.name }}</h1>
      <div v-for="block in story?.content?.body" :key="block._uid">
        <!-- Render block text -->
        <div v-if="block.component === 'text'">{{ block.text }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
//   const { data: story, error } = await useAsyncData('home', () =>
//   useStoryblokApi().get('cdn/stories/home', {
//     version: 'draft', // Hoặc 'published' nếu bạn muốn lấy phiên bản đã publish
//   }).then((res) => res.data.story)
// )
// console.log(story.value)
  </script>
  