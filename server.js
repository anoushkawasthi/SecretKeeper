import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
import {routeHandler} from './routes/routeHandler.js'

const port =800
const my_server= http.createServer(async(req,res)=>{
    if (req.url === '/')
    {
        const filePath=path.join(process.cwd(),'public','index.html')
        const html=await fs.readFile(filePath,'utf-8');
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(html);
    }
    else {
        routeHandler(req,res)
    }
})
my_server.listen(port,()=>{
    console.log(`The Server is started on http://localhost:${port}`)
})