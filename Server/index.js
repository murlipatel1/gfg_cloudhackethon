const express = require("express");
const app = express();


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

    var v2 = req.body.num2;
    var v3 = req.body.num1;
    var v1 = req.body.num1;
    var v1 = req.body.num1;
    // var result = n1 + n2;

    res.send("Result of calculation(sum) is : " + result);
});

app.listen(3000,function(){
    console.log("Local port 3000 working");
});