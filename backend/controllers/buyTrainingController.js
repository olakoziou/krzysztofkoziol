// const dotenv = require('dotenv');
// const path = require('path');
// dotenv.config({ path: path.resolve(__dirname, '../config.env') });
// const stripe = require('stripe')(process.env.STRIPE_SECRET);

// exports.buyTraining = async (req, res) => {
//   res.statusCode = 200;
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     // payment_method_types: ['card', 'p24'],
//     line_items: [
//       {
//         price: 'price_1K4RVzKqHIfHOAV62CxegpQH',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${process.env.DOMAIN}/zakupiono-szkolenie`,
//     cancel_url: `${process.env.DOMAIN}/anulowano-zakup`,
//   });

//   //   res.redirect(303, session.url);
//   res.json(session);
// };
