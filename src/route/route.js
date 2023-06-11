const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController')


//API for UserRegistration

router.post('/userRegistration', userController.userRegistration);

router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Request is correct or not!"
    })

})

module.exports = router