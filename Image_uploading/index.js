const express = require("express");
const app = express()
const pug = require("pug");
const path = require("path");
const fs = require("fs");
//addng the css file linker
app.use("/cssFiles" , express.static(__dirname+'/views'));
app.use("/StoredImages", express.static(__dirname+'/images'));
//End in adding the linker
//setting pug as a template engine
app.set('view engine','pug')
//End in setting the pug
//Inserting the path
console.log(__dirname);
//End in inserting the path
app.get('/',(req,res)=>{
	res.render('main');
})
app.get('/Video',(req,res)=>{
	res.render('video');
})
app.listen(800,()=>{
	console.log("The wibsite is hosted");
})
//Happening of the file structure
const directoryPath = path.join(__dirname+"/images");
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});