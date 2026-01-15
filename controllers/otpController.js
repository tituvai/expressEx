const signupSchema = require("../model/signupSchema")


async function otpController(req, res) {
    const {email, otp}= req.body
    const user = await signupSchema.findOne({email})

    if(!user){
        return res.status(400).json({
            "message": "user is not found"
        })
    }

    if(user.verification){
        return res.json({"message": "email is Verified"})
    }

    if (user.otp !== otp || user.expireotp < Date.now()) {
        return res.status(400).json({ messes: "invalied otp" })
    }

    user.verification= true
    user.otp = undefined
    user.expireotp = undefined

    await user.save()
    res.status(400).json({
        message: "Email Verification Done"
    })


}

module.exports= otpController