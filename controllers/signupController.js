const signupSchema = require("../model/signupSchema")
const bcrypt = require('bcrypt');
const crypto = require("crypto");
const emailValidation = require("../helpers/emailValidation");
const emailVerification = require("../helpers/emailVerification");


async function signupController(req, res) {
    const {firstName, lestName, email, password}=req.body

    if(!firstName || !lestName){
        return res.send("name is require")
    }
    if(!email){
        return res.send("email is require")
    }
    if(!password){
        return res.send("password is require")
    }
    if(!emailValidation(email)){
        return res.send("email format is require")
    }

    const emaildublicat= await signupSchema.findOne({email})
    if(emaildublicat){
        return res.json({"message":"email daboll"})
    }

    const otp = crypto.randomInt(100000, 999999).toString();
    console.log(otp);

    const expireotp = new Date(Date.now() + 1 * 60 * 1000)
    

    bcrypt.hash(password, 10, function(err, hash) {
    const user = signupSchema({
        firstName,
        lestName,
        email,
        password: hash,
        otp: otp,
        expireotp: expireotp
    })

    emailVerification(email, otp)
    user.save()

    res.json(user)
});
    
    
}
module.exports = signupController