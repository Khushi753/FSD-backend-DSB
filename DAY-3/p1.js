const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World!');
});
//http://localhost.9000/
server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
    console.log('Server running at http://127.0.0.1:9000/');
});