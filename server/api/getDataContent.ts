
export default defineEventHandler(async () => {
 const config = useRuntimeConfig()
const data = await $fetch(`${config.public.URL_MAIN}dataStrapi.json`)
  return data
})
