// var fs=require('fs');
// var http=require('http');

// var server=http.createServer((req,res)=>{

//     if(req.url="/"){
//         //ASynchronous ffff
//         fs.readFile('index.html',(err,data)=>{
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.write(data);
//             res.end();
//         });
//     }
// });
// server.listen(4040);
//  console.log("The server is running successfully");

 const fs=require('fs');
 const http=require('http');
 const server=http.createServer((req,res)=>{
    if(req.url="/"){
         //  asynchronous
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        });
    }
 });
 server.listen(4040);
 console.log("The Server is running Successfully");
