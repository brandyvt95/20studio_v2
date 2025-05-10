export function formatData(data:any) {
    return data.reduce((acc:any, item:any) => {
      Object.keys(item).forEach((key) => {
        if (!acc[key]) acc[key] = []
        acc[key].push(item[key])
      })
      return acc
    }, {})
  }
  