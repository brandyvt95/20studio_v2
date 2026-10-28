
import { fetchInfoCompany, fetchNavbar, fetchIndustriesCompany } from './fetchData'


export const relationFetchers: Record<string, () => Promise<any>> = {
  info_companies: fetchInfoCompany,
  industries_companies: fetchIndustriesCompany,
  navbars: fetchNavbar,
}
type Meta = {
  relation: string[]
}

export async function processRelations(input: any): Promise<{ data: any; meta: Meta }> {
  const meta: Meta = { relation: [] }

  const walk = async (obj: any): Promise<any> => {
    if (Array.isArray(obj)) {
      return Promise.all(obj.map(walk))
    }

    if (obj && typeof obj === 'object') {
      const result: Record<string, any> = {}

      for (const [key, value] of Object.entries(obj)) {
        if (relationFetchers[key]) {
          result[key] = await relationFetchers[key]()
          meta.relation.push(key)
        } else {
          result[key] = await walk(value)
        }
      }

      return result
    }

    return obj
  }

  const data = await walk(input)
  return { data, meta }
}