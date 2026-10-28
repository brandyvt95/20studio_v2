


const ignoreKeys = ['createdAt', 'updatedAt', 'documentId', 'id', 'publishedAt']
export function cleanDeep(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(cleanDeep)
  } else if (typeof obj === 'object' && obj !== null) {
    const result: any = {}
    for (const key in obj) {
      if (!ignoreKeys.includes(key)) {
        result[key] = cleanDeep(obj[key])
      }
    }
    return result
  }
  return obj
}

