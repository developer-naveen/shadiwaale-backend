 const userModel = require('../models/userModel')

 const userRegistration = async function(req, res) {

    try{
        const userData = req.body

        // console.log(userData);

        finalData = await userModel.create(userData)
        return res.status(201).send({
            status: 'success',
            data: finalData
        })
    }
    catch(err){




    }

 }

 module.exports.userRegistration = userRegistration