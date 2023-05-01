
const express = require('express');
const path = require('path');
const app = express();

// const registrationformPath = path.join(__dirname, "/modules/regform.js")
// console.log(registrationformPath);
// app.use(express.static(registrationformPath))


app.set("view engine", "hbs")

app.get("/userRegistration", (req, res) => {
    res.render("regForm")
})

app.get("/", (req, res) => {
    res.send("Welcome To Shadiwaale.com")
})

app.listen(3000, () => {
    console.log("welcome to Shadiwaale.com | server has been started");

} )