const http = require('http');

const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Welcome to my first web page ")
        res.end()
    }
    else if(req.url==='/con'){
        res.write("Welcome to my contact page ")
        res.end()
    }
    else {
        res.end(`
    <h1>Oops!</h1>
    <p>We can find what you are looking for!!!</p>
    <a href="/">back home</a>
    `)
    }
    
})

server.listen(5432)