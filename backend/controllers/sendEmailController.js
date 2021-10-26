const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
  let { text } = req.body;
  console.log(req.body);
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: 'olakoziol098@gmail.com',
    subject: 'test email',
    html: `<div className="email" style="
          border: 1px solid black;
          padding: 20px;
          font-family: sans-serif;
          line-height: 2;
          font-size: 20px; 
          ">
          <h2>Here is your email!</h2>
          <p>${text}</p>
      
          <p>All the best, Darwin</p>
           </div>
      `,
  });
};
