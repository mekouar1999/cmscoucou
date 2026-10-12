const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT 

app.get("/", (req,res)=>{
    res.send("Hello from back end")
})

app.listen(port,()=>{
    console.log("serveur qui tourne dans le port " + port)
})