const nodemailer = require('nodemailer');

const sendEmail = (userName, userEmail) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  let options = {
    from: `"React & Nodejs Mail App" <${process.env.APP_EMAIL}>`,
    to: userEmail,
    subject: `Hello ${userName} 😇`,
    html: `
      <p><b>Your name:</b> ${userName}</p>
      <p><b>Your email:</b> ${userEmail}</p>
      <p>That's right !?</p>
      <h3>Mailing with ❤</h3>
    `,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) return console.log(err);
    console.log('Email send successfully!');
  });

  transporter.close();
};

module.exports = sendEmail;
