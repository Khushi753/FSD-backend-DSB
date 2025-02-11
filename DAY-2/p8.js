const fs=require('fs');
fs.rmdir("mydir",(a)=>{
    if (a) {
        console.error("error deleting directory:",a);
        return;
    }
    console.log("directory deleted successfully");
});