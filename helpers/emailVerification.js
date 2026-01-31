const nodemailer = require("nodemailer");

async function emailVerification(email, otp) {
    const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD
  },
});

const info = await transporter.sendMail({
    from: `"mern" <${process.env.EMAIL}>`,
    to: email,
    subject: "Otp",
    text: "OTP Verification", 
    html: `<h1>your otp code ${otp}</h1>`, 
  });

}

module.exports = emailVerification