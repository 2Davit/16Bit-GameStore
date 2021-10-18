const Sequelize = require("sequelize");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { window } = require('./Helper');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



async function sendUserMail(req, res) {
//   const dom = new JSDOM(`<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>Static Template</title>
//   </head>
//   <body style="margin: 0; padding: 0">
//     <div style="width: 100vw; background-color: #9b5df7;">
      
//         <a href="https://16-bit-game-store.vercel.app/home" target="_blank" style="margin: 0%">
//           <img
//             src="https://res.cloudinary.com/druj3xeao/image/upload/v1634145513/samples/16bit_p3aiqt.jpg"
//             alt="asdsd"
//             style="width: 100vw; height: 15rem; margin-bottom: 0%"
//           />
//         </a>
      
//       <div style="background-color: rgb(0, 0, 0); padding: 0.1rem">
//         <p id="header" style="color: #fff;">
//           <!-- INNER TEXT -->
//           Hi Juan Carlos! We really appreciate your last visit. Hope you are
//           enjoying your new videogame!"; Check your purchase summary:
//         </p>
//       </div>
//       <div
//         id="products"
//         style="background-color: #000; width: 100vw; height: auto"
//       >
//         <div
//           id="container"
//           style="
//             display: flex;
//             align-items: center;
//             justify-content: space-around;
//             flex-wrap: wrap;
//             background-color: #000;
//           "
//         >
//           <!-- <div style="background-color: #9b5df7; display: flex; flex-direction: column; align-items: center; border-radius: 16px; margin: 1.5rem 0rem ;">
//             <img
//               src="https://openretro.org/image/dab9adf403a0becaa5fa234ba5113d204a5985a1?s=2x"
//               alt="juego"
//               style="width: 10rem; height: 10rem; border-top-left-radius: 16px; border-top-right-radius: 16px"
//             />
//             <div style="display: flex; flex-direction: column; align-items: flex-start;">
//               <h5 style="margin: 0; padding-top: 5px;">NAME</h5>
//               <h5 style="margin: 0; padding-top: 5px" >Price: $55</h5>
//               <h5 style="margin: 0; margin-bottom: 5px; padding-top: 5px" >Quantity: 5</h5>
//             </div>
//           </div> -->
        
//         </div>
//         <div style="display: flex; justify-content: center;">
//           <h2 style="color: #fff; margin: 2.5rem 0rem;">TOTAL: $300</h2>
//         </div>
//       </div>
//       <div style="background-color: #000; color: lightgray; ">
//         <p style="margin: 0;">
//         All rights reserved. All trademarks, service marks and company names are the property of their respective owners.
//         © 16bitStore ~ This is a fictional project for the bootcamp
//       </p>  
//       </div>
//     </div>
//     <script src='Email.js'></script>
//   </body>
// </html>`);

  
  const { email, username, action, info } = req.body;
  const { cart, total } = info;

  

  if (action === 'purchase') {

    let aux = ``;

    cart.forEach(product => {

      aux += `
        <div style="background-color: #9b5df7; display: flex; flex-direction: column; align-items: center; border-radius: 16px; margin: 1.5rem 0rem ;">
          <img
            src=${product.image_product[0]}
            alt=${product.name_product}
            style="width: 10rem; height: 10rem; border-top-left-radius: 16px; border-top-right-radius: 16px"
          />
          <div style="display: flex; flex-direction: column; align-items: flex-start;">
              <h5 style="margin: 0; padding-top: 5px;">${product.name_product}</h5>
              <h5 style="margin: 0; padding-top: 5px" >Price: ${product.price_product}</h5>
              <h5 style="margin: 0; margin-bottom: 5px; padding-top: 5px" >Quantity: ${product.quantity}</h5>
          </div>
        </div>
      `
    console.log(window.eval(`document.getElementById("container").textContent'`))

    // window.document.getElementById("container").innerHTML = aux;
    //console.log(window.document.getElementById("container").textContent);
    // console.log(window.document.location);
    console.log(dom);
    })
  };

  

  const CLIENT_ID =
    "629164237375-nd9vo40e7m7p82lr4s7bgecqebbn7i6v.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//044c2jHqjFfgACgYIARAAGAQSNwF-L9Irv0YSqP8EJos551tZlxLetRQyLhatO8FnlGacYXpCR5rK1dnB0UnMJ11_roWPauDdmoM";

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "imap.ethereal.email",
      post: 993,
      secure: false,
      auth: {
        type: "OAuth2",
        user: "guido.gambini@usal.edu.ar",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    let mailOptions = {
      from: "16Bit-GameStore",
      to: email,
      subject: action === 'purchase' ? "The summary of your purchase 🎉" : "Welcome to 16Bit 🚀",
      html: "window.document.body"
    };

    const result = await transporter.sendMail(mailOptions);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  };
};

module.exports = {
  sendUserMail,
};
