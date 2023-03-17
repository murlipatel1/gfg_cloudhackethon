const express = require("express");
const app = express();


app.get("/",function(req,res){
    res.send("Testing done");
});


app.listen(3000,function(){
    console.log("Local port 3000 working");
});