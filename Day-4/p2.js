const http=require("http");
const fs=require('fs/promises');
const server=http.createServer(async(req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.writeHead(200);
    if(req.url=='/getdata' && req.method=='GET')
    {
        const data=await fs.readFile('./data.json','utf-8');
        res.write(JSON.stringify(data));
    }
    else if(req.url=='/setdata' && req.method=='POST'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk;
        });
        req.on('end',async()=>{
            const newdata=JSON.parse(body);
            let users=[];
            try{
                users=JSON.parse(await fs.readFile('./data.json'));
                const newid=users.length>0?users[users.length-1].id+1:1;
                newdata.id=newid;
                users.push(newdata);
                await fs.writeFile('./data.json',JSON.stringify(users));
                res.end('Data set sucessfully');
            }
            catch(e){
                console.log(e);
                res.end('error writing File');
            }

    });
}
});
server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
    console.log('Server running at http://127.0.0.1:9000/');
});