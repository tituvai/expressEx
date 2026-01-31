const emailValidation = require("../helpers/emailValidation");
const signupSchema = require("../model/signupSchema");
const bcrypt = require('bcrypt');
const session = require('express-session')


async function loginFn(req, res) {
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

    // section Schema 
    req.session.isAuth=true
    res.session.signupSchema={
        id:loginUser._id,
        email:loginUser.email,
        firstName:loginUser.firstName,
    }

    // section Schema 

    await loginUser.save()
    res.status(200).json({
        message: "login success"
    })

}

function logoutController(req, res) {
    req.session.destroy(function(err) {
  if(err){
    return res.status(400).json({message:"samthing is woring"})
  }
  res.status(200).json({
    success:true,
    message:"Log out successful"
  })
})
}

async function dashboardController(req, res) {
    return res.json({message:"well Come to Dashboard"})
}

module.exports = {loginFn, dashboardController, logoutController}