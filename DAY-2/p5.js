const fs =require("fs");
const newdata="i am appended at the end of the file"
fs.appendFile("./data.txt",newdata,(err)=>{
    if (err)
        console.error(err);
    else
    console.log("data appended");
})