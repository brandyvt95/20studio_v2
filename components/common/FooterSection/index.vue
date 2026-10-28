<template>
  <template v-if="isRenderFooter">
    <component :is="isShowRedirectStyle ? RedirectProject : Basic" v-bind="isShowRedirectStyle
      ? { content: nextItem }
      : { 
        content:jsonData.data_global.data.FooterSection,
        info_navbar: jsonData.info_navbar.data.NavbarItem, 
        info_company: jsonData.info_company.data
        }" />
  </template>
</template>

<script setup>
//import { projects_page } from '~/constants/content'
import Basic from './Basic/index.vue'
import RedirectProject from './RedirectProject/index.vue'
import { routesListIgnoreFooter } from '../../../constants/routerList'

const jsonData = useState('jsonData')

const projects_page = jsonData.value.info_project.data.List

const route = useRoute()
const nextItem = computed(() => {
  const index = projects_page.findIndex(item => `/projects/${item.slug}` === route.path);
  if (index === -1 || projects_page.length === 0) return null;
  const nextIndex = (index + 1) % projects_page.length;
  return projects_page[nextIndex];
});


const isIgnoredPath = computed(() => {
  return routesListIgnoreFooter.includes(route.path)
})
const isRenderFooter = computed(() => {
  return !isIgnoredPath.value
})
const isShowRedirectStyle = computed(() => {
  return route.path.startsWith('/projects/')
})
</script>
