const nodemailer = require('nodemailer');

const sendEmail = (userName, userEmail) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD
    }
  });

  let options = {
    from: `"React & Nodejs Mail App" <${process.env.APP_EMAIL}>`,
    to: userEmail,
    subject: `Hello ${userName} 😇`,
    html: '<h1>🥰 Love You 🥰</h1>'
  };

  transporter.sendMail(options, (err, info) => {
    if (err) return console.log(err);
    console.log('Email send successfully!');
  });

  transporter.close();
};

module.exports = sendEmail;
