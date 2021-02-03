const http = require('http');
http.createServer((req,res)=>{
    res.end("The quick brown the fox jumped over the lazy dog!")
}).listen(3000);

const http = require('http');
const myServer=http.createServer((req,res)=>{
    res.end("I Abdul Motaleb of_____Student");
});
myServer.listen(3000,()=>{
    console.log("Server is Ruing at LocalHost:30000");
});

const http = require('http');
const port=3000;
const hostname='127.0.0.1';
const myServer=http.createServer((req,res)=>{
    res.end("<h1>The File open is need <a>node.js</a> installed. So that running file</h1>");
});
myServer.listen(port,hostname,()=>{
    console.log(`Server is Ruing at http://${hostname}:${port}`);
});
