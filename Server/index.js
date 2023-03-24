const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const login = '../Client/login and signup/'
const app = express();

// app.use(express.static("Client"));
app.use(express.static("D:/0000 gfg hackethon/gfg_cloudhackethon/Client/login and signup/"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    // res.sendFile(__dirname + "/login.html");
    res.sendFile("D:/0000 gfg hackethon/gfg_cloudhackethon/Client/login and signup/login.html");
    // res.sendFile( login + "/login.html");
    // res.sendFile(login)
});

app.post("/", function(req,res){

    var name = req.body.fullName;
    var phone = Number(req.body.phNumber);
    var email = req.body.eMail;
    var pw = req.body.passWord;

    console.log(name,phone,email,pw);
});

app.listen(3000,function(){
    console.log("Local port 3000 working");
});