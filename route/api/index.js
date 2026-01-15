const express = require('express')
const router = express.Router()
const signupRoute = require('./auth/registacion')

router.use('/auth', signupRoute)
module.exports = router