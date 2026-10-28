
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  console.log("Webhook run")
  const body = await readBody(event)
  const uid = body?.uid
  const data = body?.entry
  if (!uid || !data) {
    return { message: 'Invalid payload' }
  }
  const config = useRuntimeConfig()
  const supabase = createClient(config.public.supabaseUrl, config.supabaseServicesKey)

  if (!uid || !data) {
    throw createError({ statusCode: 400, statusMessage: 'Missing uid or data' })
  }

  const { error } = await supabase
    .from('content')
    .update({ data: data })
    .eq('uid', uid)

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return {
    success: true,
    message: 'Cập nhật thành công'
  }


})



