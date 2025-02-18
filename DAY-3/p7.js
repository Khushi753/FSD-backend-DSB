const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.url=='/home'){
        res.end('welcome to home page');
    }
    else if(req.url=='/about'){
        res.end('welcome to about page');

    }
    else{
        res.end('404 not found');
    }

}); 
server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
       console.log("server is running on port 9000");
});