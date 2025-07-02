export function parseJSONBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''

    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', () => {
      try {
        const parsed = JSON.parse(body)
        resolve(parsed)
      } catch (err) {
        reject(err)
      }
    })

    req.on('error', reject)
  })
}
