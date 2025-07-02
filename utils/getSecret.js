import path from 'node:path'
import fs from 'fs/promises'

export async function getSecrets(){
    try{
        const filePath=path.join(process.cwd(),'data','secrets.json')
        const info=await fs.readFile(filePath,'utf-8')
        return JSON.parse(info)
    }
    catch(err){
        console.log("Error in reading")
        return []
    }
}