const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const route = require('./route/route.js');


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())










app.use('/', route);













const mongodb_url = "mongodb+srv://naveen-developer:DfQ4znho2woWbAqB@naveen-developer.gszoxjk.mongodb.net/shadiwaaleUser"

mongoose.connect(mongodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("Hi! MongoDB is connected Now ");
}).catch((error)=>{
    console.log("Sorry! MongoDB is not connected");
    console.log(error);
});

const listenPort = process.env.PORT || 5000;

app.listen(listenPort, function () {
    console.log(`Shadiwaale-App running on port ${listenPort}`);
})















// const dotenv = require('dotenv');
// const path = require('path');
// const { error } = require('console');


// dotenv.config({path: './config.env'});


// const dbUrl = process.env.DATABASE

// const PORT = process.env.PORT || 3000;

// mongoose.connect(dbUrl , {

// } ).then(() => {
//     console.log("connection established");
// }).catch((err) => console.log('connection failed'));






// const registrationformPath = path.join(__dirname, "/modules/regform.js")
// console.log(registrationformPath);
// app.use(express.static(registrationformPath))


// app.set("view engine", "hbs")

// app.get("/userRegistration", (req, res) => {
//     res.render("regForm")
// })

// app.get("/", (req, res) => {
//     res.send("Welcome To Shadiwaale.com")
// })

// app.get("/about", (req, res) => {
//     res.send("Welcome To Shadiwaale.com | About Section")
// })

// app.get("/contact", (req, res) => {
//     res.send("Welcome To Shadiwaale.com | Contact Section")
// })

// app.get("/registration", (req, res) => {
//     console.log(req.body.name);
//     console.log(req.body.address);
//     res.json({ Message: req.body })
// })