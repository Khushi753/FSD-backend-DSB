const fs = require('fs');
fs.readFileSync('./data.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log("data read from file",data);
});
