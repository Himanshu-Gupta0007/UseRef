const express = require('express') 

const app = express();

app.get("/" , function(req,res){
    console.log("app get is on the server");
    res.send("hello ji this is mongoose data")
    

});

console.log("server is up");


app.listen(3000)

