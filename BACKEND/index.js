import express from 'express';
const app = express();
const port = 9000;
app.use(express.json());
app.listen(9000,()=>{
    console.log("server is running on port 9000");
})
