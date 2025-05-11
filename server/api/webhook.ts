import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { processRelations } from './processRelations'
import { cleanDeep } from './utils'


export default defineEventHandler(async (event) => {


 const config = useRuntimeConfig()
  const KEY = getRequestHeader(event, 'Authorization')?.split(' ')[1]; 
    console.log("out")
  if (KEY !== config.SECRET_KEY_CMS_APP) {
    return createError({
      statusCode: 401,
      message: 'Unauthorized'
    });
  }
  console.log("innnnnn")
  const body = await readBody(event)
  const model = body?.model
  const data = body?.entry
  if (!model || !data) {
    return { message: 'Invalid payload' }
  }

  const dataPath = join(process.cwd(), 'public', 'dataStrapi.json')

  let oldData = {}
  if (existsSync(dataPath)) {
    oldData = JSON.parse(readFileSync(dataPath, 'utf-8'))
  }

  let { data: filteredData, meta } = await processRelations(data)
  filteredData = cleanDeep(filteredData)
  const updatedData = {
    ...oldData,
    [model]: {
      ...filteredData,
      meta,
    }
  }

  writeFileSync(dataPath, JSON.stringify(updatedData, null, 2), 'utf-8')
  console.log("Update",model)
  return { message: `Updated ${model}` }

})
