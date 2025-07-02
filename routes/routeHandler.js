import { getSecrets } from '../utils/getSecret.js'
import { addSecret } from '../utils/addSecret.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { sendResponse } from '../utils/sendResponse.js'

export async function routeHandler(req, res) {
  if (req.url === '/secrets' && req.method === 'GET') {
    const data = await getSecrets()
    sendResponse(res, 200, 'application/json', JSON.stringify(data))
  } 
  else if (req.url === '/secrets' && req.method === 'POST') {
    try {
      const body = await parseJSONBody(req)
      await addSecret(body)
      sendResponse(res, 201, 'application/json', JSON.stringify({ status: 'added' }))
    } catch (err) {
      sendResponse(res, 400, 'application/json', JSON.stringify({ error: 'Invalid JSON' }))
    }
  } 
  else {
    sendResponse(res, 404, 'text/plain', 'Not Found')
  }
}
