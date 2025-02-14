const http=require('http');
const users=[
    {id:1,name:'John',age:30},
    {id:2,name:'Jane',age:25},
    {id:3,name:'Bob',age:40}
]
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(users));
});
server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
    console.log('Server running at http://127.0.0.1:9000/');
});