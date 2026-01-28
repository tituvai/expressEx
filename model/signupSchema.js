
const mongoose = require("mongoose")
const {Schema}= mongoose

const signupUser = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lestName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },

    otp:{
        type: String,
    },
    expireotp:{
        type: Date,
    },
    isVerified:{
        type: Boolean,
        default:false
    },
})

module.exports = mongoose.model('userList', signupUser)