import { promises as fs } from 'fs'
import { join } from 'path'

export default defineEventHandler(async () => {
  const filePath = join(process.cwd(), 'public/dataStrapi.json')
  const json = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(json)
})
