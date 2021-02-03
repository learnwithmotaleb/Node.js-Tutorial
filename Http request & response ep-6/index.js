const http=require('http')
const { fileURLToPath } = require('url')
const server=http.createServer((req,res)=>{
  if(req.url=="/"){
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write('<h1>This is Home Page !</h1>')
      res.write('<p>The quick brown the fox jumped over the lazy dog jodi rat phohale suna jato bongbondu more nai!</p>')
      res.end();
  }else if(req.url=="/About"){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>This is About Page !</h1>')
    res.write("<p>The about page of the best of the page and here about my</p>") 
    res.end();
  }else if(req.url=="/Contact"){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>This is Contact Page !</h1>')
    res.write("<p>here of my contac page in the of my dispresction</p>")
    res.end();
  }
});
server.listen(5050);
console.log("Server is running");