const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
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
    to: req.body.data.email,
    subject: 'Zarabianie na nieruchomościach. Szkolenie i warsztat praktyczny.',
    html: `<div className="email" style="
          padding: 10px 5px;
          font-family: sans-serif;
          line-height: 1.6;
          font-size: 20px; 
          ">
          <h2>Witaj na pokładzie!</h2>
          <span>Twoje dane do faktury to:</span>
          <ul>
            ${
              req.body.data.name
                ? `<li>Imię i nazwisko: ${req.body.data.name}</li>`
                : `<li>Firma: ${req.body.data.company}</li>`
            }
            <li>Email: ${req.body.data.email}</li>
            <li>Adres: ${req.body.data.address1}, ${req.body.data.address2}, ${
      req.body.data.address3
    },</li>
            <li>NIP: ${req.body.data.nip}</li>
          </ul>
          <p>Dokonaj płatności poprzez bramkę stripe lub przelewem:</p>
          <ul>
          <li>SunStreet Investment Sp. z.o.o</li>
          <li>Masarska 13/B4, 31-534 Kraków</li>
          <li>NIP: 678-316-33-06</li>
          <li>15 1140 2004 0000 3902 7653 5691
          Kraków</li>
          <li>W tytule: ${
            req.body.data.name
              ? `Opłata za szkolenie - ${req.body.data.name}`
              : `Opłata za szkolenie - ${req.body.data.company}`
          }</li>
          </ul>
          <p>Po zaksięgowaniu płatności, faktura zostanie wysłana na Twój adres mailowy.</p>
          <p>Jeśli masz jakieś pytania, zadzwoń - <a href="tel:+48-796-483-333">796-483-333.</a> Pozdrawiam, Krzysiek Kozioł.</p>
           </div>
      `,
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_KRIS,
    subject: 'SZKOLENIE - pojawił się nowy klient.',
    html: `<div className="email" style="
          padding: 10px 5px;
          font-family: sans-serif;
          line-height: 2;
          font-size: 20px; 
          ">
          <h2>Zarabianie na nieruchomościach. Szkolenie i warsztat praktyczny.</h2>
          <p>Pojawił się nowy klient. Dane: </p>
          <ul>
            ${
              req.body.data.name
                ? `<li>Imię i nazwisko: ${req.body.data.name}</li>`
                : `<li>Firma: ${req.body.data.company}</li>`
            }
            <li>Email: ${req.body.data.email}</li>
            <li>Adres: ${req.body.data.address1}, ${req.body.data.address2}, ${
      req.body.data.address3
    },</li>
            <p>Czekaj na płatność. Sprawdź swoje konto bankowe oraz <a href="https://www.stripe.com">stripe</a>.</p>
          </ul>
           </div>
      `,
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_SSI,
    subject: 'SZKOLENIE - pojawił się nowy klient.',
    html: `<div className="email" style="
    padding: 10px 5px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px; 
    ">
    <h2>Zarabianie na nieruchomościach. Szkolenie i warsztat praktyczny.</h2>
    <p>Pojawił się nowy klient. Dane: </p>
    <ul>
      ${
        req.body.data.name
          ? `<li>Imię i nazwisko: ${req.body.data.name}</li>`
          : `<li>Firma: ${req.body.data.company}</li>`
      }
      <li>Email: ${req.body.data.email}</li>
      <li>Adres: ${req.body.data.address1}, ${req.body.data.address2}, ${
      req.body.data.address3
    },</li>
      <p>Czekaj na płatność. Sprawdź swoje konto bankowe oraz <a href="https://www.stripe.com">stripe</a>.</p>
    </ul>
     </div>
`,
  });
};
