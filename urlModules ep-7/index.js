var http=require('http');
var url=require('url');
var { fileURLToPath } = require('url')
var server=http.createServer((req,res)=>{
  var myurl="https://www.youtube.com/results?search_query=tech+motaleb";
  var myurlobj=url.parse(myurl,true);

  var myurlhostName=myurlobj.host;
  var myurlpathName=myurlobj.pathname;
  var myurlsearchname=myurlobj.search;
  res.writeHead(200,{'Content-Type':'text/html'})
  res.write(myurlhostName);
  res.write(myurlpathName);
  res.write(myurlsearchname);
  
  res.end();

});
server.listen(5050);
console.log("Server is running");