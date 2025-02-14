const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="background-color:blue;color:white">hello world</h1>');
});
server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
    console.log('Server running at http://127.0.0.1:9000/');
});