const signupSchema = require("../model/signupSchema")
const crypto=require("crypto")

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


async function resendOtpColtroller(req, res) {
    const {email} = req.body;
    const resentOtp = await signupSchema.findOne({email});
    if(!resentOtp){
        return res.json({message: "email is not found"})
    }

   const otp = crypto.randomInt(100000, 999999).toString();

    const expireotp = new Date(Date.now() + 1 * 60 * 1000)

    resentOtp.otp=otp
    resentOtp.expireotp = expireotp

    resentOtp.save()
    res.json({
        message: "otp success"
    })

}

module.exports= {otpController, resendOtpColtroller}