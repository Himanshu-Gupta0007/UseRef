const express = require('express') 

const app = express();

const usermodel =require('./usermodel')


app.get("/" , function(req,res){
    console.log("app get is on the server");
    res.send("hello ji this is mongoose data")
    

});


app.get("/create" ,async function(req,res){
    let createduser = await usermodel.create({
        name:"hmanshi",
        email:"himu@456",
        username:"harsh"


    })
    res.send(createduser)
    

});

console.log("server is up");


app.listen(3000)

