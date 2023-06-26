const  mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
   
    city:{
        type:String,
        required: true
    },
    mobile:{
        type:Number,
        required: true
    },
    password:{
        type:String,
        required: true
    }
},
{timestamps:true})

const User = mongoose.model("User", userSchema,)

module.exports = User