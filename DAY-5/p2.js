const express=require('express');
const app=express();
app.use(express.json());
let users=[
    {id:1,name:"john",age:30}
];
app.get('/users',(req,res)=>{
    res.json(users);
});

app.post('/users',(req,res)=>{
    const {username,password}=req.body;
    console.log(`user ${username}and password ${password} recieves`)
    res.json({message:"Data recieved"});
})
app.post('/reg',async(req,res)=>{
    const newuser=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    newuser.id=newid;
    users.push(newuser);
    res.json(newuser);
})

app.listen(9000,()=>{
    console.log("server is running on port 9000");
})