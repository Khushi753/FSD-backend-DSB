const express=require('express');
const fs=require('fs/promises');
const app=express();
app.use(express.json());

app.get('/users',(req,res)=>{

})
app.post('/register',(req,res)=>{})
app.put('/user/:id',(req,res)=>{})
app.delete('/user/:id',(req,res)=>{})

app.listen(9000,()=>{
    console.log("server is running on port 9000");
})