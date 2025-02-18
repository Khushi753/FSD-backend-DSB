const http=require('http');

const server=http.createServer(async(req,res)=>{
    const data=await fetch("https://dummyjson.com/products");
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    const newproducts=await data.json();
    const myproduct=newproducts.products;
    const title=myproduct.map((product)=>{
        return product.title;
    });
    // res.end(JSON.stringify(title));
    res.end(JSON.stringify(title));
});
server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
       console.log("server is running on port 9000");
});