 const userModel = require('../models/userModel')

 const userRegistration = async function(req, res) {

    try{
        const userData = req.body

    const uniqueMobile = await userModel.findOne({mobile: userData.mobile})

     if(uniqueMobile){
        return res.status(403).send({status: "false", message: "this mobile is already registered with someone profile!"})
     }



        // console.log(userData);

        finalData = await userModel.create(userData)
        res.status(201).send({status: true, message:"Registration successfully"});
        
       
    }
    catch(err){




    }

 }

 module.exports.userRegistration = userRegistration