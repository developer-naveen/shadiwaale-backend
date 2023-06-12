const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');
// const async = require('hbs/lib/async');


//API for UserRegistration

router.get('/',async (req,res)  => {
    return res.status(200).send({
        status: 'OK',
        message: "Server is running"});
})

router.post('/register', userController.userRegistration);

router.all("/**", function (req, res) {
    return res.status(404).send({
        status: false,
        message: "Make Sure Your Request is correct or not!"
    })

})

module.exports = router