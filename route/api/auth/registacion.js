const express = require('express')
const signupController = require('../../../controllers/signupController')
const {otpController, resendOtpColtroller} = require('../../../controllers/otpController')
const loginController = require('../../../controllers/loginController')
const router = express.Router()

router.post('/signup', signupController)
router.post('/verified', otpController)
router.post('/resend', resendOtpColtroller)
router.post('/login', loginController)


module.exports = router