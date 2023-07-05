const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h2>cinco dame tu cosita</h2>')
        res.end()
    }else if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h2>Bem-vindo á página inicial!</h2>')
        res.end()
    }else if(req.url ==='/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<meta charset="UTF-8">')
        res.write('<h2> Sobre nós: Somos uma empresa dedicada a capturar dame tu cositas</h2>')
        res.end()
    }
});
server.listen(port, ()=>{
    console.log(`Servidor ativo ${port}`)
})