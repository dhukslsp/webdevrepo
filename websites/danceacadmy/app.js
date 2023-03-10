const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// const bodyphraser = require("bodyphraser");
//making the mongoose connect
mongoose.connect('mongodb://localhost:27017/test');

//exitcode of mongoose connect
// console.log(__dirname);
//Making a new schema
const Contact_schema = new mongoose.Schema({
  name: String,
  Username: String,
  Password: String,
  Email: String,
  Mobile_no: String
});
const model = mongoose.model('Cpntact', Contact_schema);
// console.log(Contact_schema)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//End 
app.use("/cssFiles", express.static(__dirname + '/views'));
app.use("/image", express.static(__dirname + '/static'));
app.use("/sponsorimage", express.static(__dirname + '/sponserimg'));
//Request and response for 
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/views/1.html'));
});
//makig another request
app.get('/Contact_Us', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/loginpage.html'));
})
app.post('/Contact', (req, res) => {
  console.log(req.body);
  const registeration = new model({
    name: req.body.Name,
    Username: req.body.Username,
    Password: req.body.Password,
    Email: req.body.Email,
    Mobile_no: req.body.Mibile_no
  })
  registeration.save();
  res.send("Credentials saved");
});
app.listen(800, () => {
  console.log("Listening to the port 800");
});