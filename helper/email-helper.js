const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendPasswordResetEmail(email, resetLink) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset Request",
    text: `Dear user,\n\nWe received a request to reset your password. Please click the link below to proceed with resetting your password. If you did not request this change, please disregard this email.\n\nReset Password: ${resetLink}\n\nBest regards,\nLogiasphere Support Team`,
    html: `<p>Dear user,</p><p>We received a request to reset your password. Please click the link below to proceed with resetting your password. If you did not request this change, please disregard this email.</p><p><a href="${resetLink}">Reset Password</a></p><p>Best regards,<br/>Logiasphere Support Team</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

module.exports = { sendPasswordResetEmail };
