const express = require('express')
const app = express()
const port = 80
const path = require("path")
//Making functions for the website

//For serving the static files
app.use('/static',express.static('static'))
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))
//Set template engine
app.get("/",function(req,res){
    const params = {"title": 'PUBg is the best game',content:"This is the main var of the content",btnval:"These are the template projects"}
    res.status(200).render("demo.pug",params)
})
app.get("/about",(req,res)=>{
    res.send("thi is another res webpage")
})
app.listen(port,function(req,res){
    console.log(`The app had been started sucessfully st port ${port}`);
})