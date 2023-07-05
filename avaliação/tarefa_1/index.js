const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<meta charset="UTF-8>');
    res.write('<h3>Olá, mundo!</h3>');
    res,end()
});
server.listen(port,()=>{
    console.log(`Servidor ativo &{port}`)
});
