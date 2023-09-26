const express = require('express');
const app = express()
const port = 5000;
const routers = require('./router/routers')
const User = require("./models/courses");
bodyParser  = require( 'body-parser' )
app.use( bodyParser({ extended: false }) )
const dotenv = require("dotenv")
dotenv.config()
//app.use(express.json())
app.use(routers)
// db connection 
const mongoose = require("mongoose")
const url = process.env.DATABASE_URL;
mongoose.connect(url).then(()=>{
  console.log("mongo server started")
})
const fs = require("fs")
app.use(express.static("views"))
app.get("/",(req, res) => {
fs.readFile("index.html",(err, data) => {
  if(err){
    console.log("Errrrrro",err)
  }
  res.send(data)
})
})
app.post( '/form_post', async( req, res ) => {
console.log(req.body)
const newUser = new User(req.body)
    await newUser.save();
res.send( 'thank-you' )})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
//console.log(fs)
})
