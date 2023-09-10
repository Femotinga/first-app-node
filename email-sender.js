const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'sendgrid',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },
});

// Define email data
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});