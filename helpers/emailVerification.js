const nodemailer = require("nodemailer");

async function emailVerification(email, otp) {
    const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, 
  auth: {
    user: "titu17940@gmail.com",
    pass: process.env.APP_PASSWORD
  },
});

const info = await transporter.sendMail({
    from: '"mern" <titu17940@gmail.com>',
    to: email,
    subject: "Otp",
    text: "OTP Verification", 
    html: `<h1>your otp code ${otp}</h1>`, 
  });

  console.log("Message sent:", info.messageId);
}

module.exports = emailVerification