const express = require('express')
const signupController = require('../../../controllers/signupController')
const {otpController, resendOtpColtroller} = require('../../../controllers/otpController')
const { dashboardController, logoutController, loginFn } = require('../../../controllers/loginController')
const authMiddleware = require('../../../middlewares/authMiddleware')
const router = express.Router()

router.post('/signup', signupController)
router.post('/verified', otpController)
router.post('/resend', resendOtpColtroller)
router.post('/login', loginFn)
router.post('/logout', logoutController)
router.get('/dashboard', authMiddleware, dashboardController)


module.exports = router