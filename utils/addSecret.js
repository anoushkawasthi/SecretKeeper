import fs from 'node:fs/promises'
import path from 'node:path'
import { getSecrets } from '../utils/getSecret.js'

export async function addSecret(newSecret) {
  try {
    const secrets = await getSecrets()
    secrets.push(newSecret)

    const filePath = path.join(process.cwd(), 'data', 'secrets.json')
    await fs.writeFile(filePath, JSON.stringify(secrets, null, 2), 'utf-8')
  } catch (err) {
    console.error('Failed to add secret:', err)
  }
}
