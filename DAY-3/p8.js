const http=require('http')

const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    const data=await fetch("https://fakestoreapi.com/products");
    //res.statusCode=200;
    const products=await data.json();
    const myhtml=`<html>
    <head>
    <title>products</title>
    <style>
    .container{
    border: 1px solid black;
    background-color:aqua;

    }
    </style>
    </head>
    <body>
    <h1>products</h1>
    ${
        products.map((product)=>{
            return `<div class="container">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <img src="${product.image}" width="200" height="250" alt="${product.title}">
            </div>`
            
        })
    }
        </body>
        </html>`
    
    res.end(myhtml);
})
server.listen(9000,(err)=>{
    if (err)
        console.log(err);
    else
       console.log("server is running on port 9000");
});