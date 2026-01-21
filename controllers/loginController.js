const emailValidation = require("../helpers/emailValidation");
const signupSchema = require("../model/signupSchema");
const bcrypt = require('bcrypt');


async function loginController(req, res) {
    const {email, password} = req.body;

    if(!email){
        return res.json({message: "Email is required"})
    }
    if(!password){
        return res.json({message: "password is required"})
    }
    if(!emailValidation(email)){
        return res.json({message: "Email Format Is Missing"})
    }

    const loginUser = await signupSchema.findOne({email})

    if(!loginUser){
        return res.json({message:"email is Not Found in DB"})
    }

    const hashPassword =await bcrypt.compare(password, loginUser.password)

    if(!hashPassword){
        return res.json({message: "password bul"})
    }

    await loginUser.save()
    res.json({
        message: "login success"
    })

}

module.exports = loginController