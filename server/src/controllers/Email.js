const Sequelize = require("sequelize");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { window } = require("./Helper");


async function sendUserMail(req, res) {

  
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

        console.log(window.document.getElementById("container"));

    })

  }

  

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
      html: window
    };

    const result = await transporter.sendMail(mailOptions);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  sendUserMail,
};
