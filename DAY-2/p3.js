const fs=require('fs');
const data="i am new data";
fs.writeFileSync("./mydir/data.txt",data,(err)=>{
    if (err) throw err;
    console.log("file created successfully");

})