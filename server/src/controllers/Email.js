const Sequelize = require("sequelize");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { User, Order } = require("../db");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

async function sendUserMail(req, res) {
  const { email, username, action, info } = req.body;

  if (info) {
    var { cart, total } = info;
  }

  const dom = new JSDOM(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body style="margin: 0; padding: 0">
    <div style="width: 100%; background-color: #000;">
      
        <a href="https://16bit-gamestore.vercel.app/home" target="_blank" style="margin: 0%; background-color:black; display: flex;justify-content: center;">
          <img
            src="https://res.cloudinary.com/druj3xeao/image/upload/v1634145513/samples/16bit_p3aiqt.jpg"
            alt="16Bit"
            style="max-width: 40rem; height: 15rem; margin-bottom: 0%; margin: auto"
          />
        </a>
      
      <div style="background-color: rgb(0, 0, 0); padding: 0.1rem; border-top: solid 2px #9b5df7"; id="header" >
      <!-- INNER TEXT -->
        
      </div>
      <div
        id="products"
        style="background-color: #000; width: 100%; height: auto"
      >
        <div>
        <div
          id="container"
          style="
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            background-color: #000;
            max-width: 100%;
          "
        >
        <--CARD-->
        </div>
        </div>
        <div style="display: flex; justify-content: center; margin: 0; border-top: solid 2px #9b5df7; border-bottom: solid 2px #9b5df7">
        <div style="margin: auto" id='total'>
        <--TOTAL-->
        </div>
        </div>
      </div>
      <div style="background-color: #000; color: lightgray; ">
        <p style="margin: 0 1rem; padding: 1rem 0">
        All rights reserved. All trademarks, service marks and company names are the property of their respective owners.
        © 16bitStore ~ This is a fictional project for the bootcamp.
      </p>  
      </div>
    </div>
    <script src='Email.js'></script>
  </body>
</html>`);

  if (action === "purchase") {
    let aux = ``;

    cart.forEach((product) => {
      aux += `
        
        <div style="background-color: #9b5df7; display: flex; flex-direction: column; align-items: center; flex-wrap: wrap; border-radius: 16px; margin: 1.5rem 1rem ;">
          <div>
          
          <img
            src=${product.image_product[0]}
            alt=${product.name_product}
            style="width: 10rem; height: 10rem; border-top-left-radius: 16px; border-top-right-radius: 16px"
          />
          <div style="display: flex; flex-direction: column; align-items: flex-start; ">
          <div style ="margin: 0.5rem 1rem; color: black">
            <h4 style="margin: 0; padding-top: 5px;"><b>${
              product.name_product.length <= 13
                ? product.name_product
                : product.name_product.slice(0, 13) + "..."
            }</b></h4>
            <h5 style="margin: 0; padding-top: 5px" >Price: $${
              product.price_product
            }</h5>
            <h5 style="margin: 0; margin-bottom: 5px; padding-top: 5px" >Quantity: ${
              product.quantity
            }</h5>
          </div>
          </div>
          </div>
        </div>

      `;
      dom.window.document.getElementById("container").innerHTML = aux;
    });

    dom.window.document.getElementById(
      "total"
    ).innerHTML = `<h2 style="color: #fff; margin: 2.5rem 0rem;">Total: $${total}</h2>`;

    dom.window.document.getElementById(
      "header"
    ).innerText = `Hi, ${username}! We really appreciate your last visit. Hope you are enjoying your products. Check your purchase summary:`;
  } else {
    dom.window.document.getElementById(
      "total"
    ).innerHTML = `<h2 style="color: #fff; margin: 2.5rem 0rem;"><a href="https://16bit-gamestore.vercel.app/home" target="_blank" style='text-decoration: none'>Start your retro trip! 🕹</a></h2>`;

    dom.window.document.getElementById(
      "header"
    ).innerHTML = `<p style="color: #fff; margin-left: 1rem">Hi, ${username}! Welcome to 16Bit community. The biggest retro videogames e-shop in Latam. Check the highlights of the month:</p>`;

    let aux = `
        
    <div style="background-color: #9b5df7; display: flex; flex-direction: column; align-items: center; flex-wrap: wrap; border-radius: 16px; margin: 1.5rem 1rem ;">
      <div>
      
      <img
        src="https://openretro.org/image/7f87fdf3b45cb003ed0729c858edc9b1c24e9f80?s=2x"
        alt="not found"
        style="width: 10rem; height: 10rem; border-top-left-radius: 16px; border-top-right-radius: 16px"
      />
      <div style="display: flex; flex-direction: column; align-items: flex-start; ">
      <div style ="margin: 0.5rem 1rem; color: black">
        <h4 style="margin: 0; padding-top: 5px;"><b>The Lion King</b></h4>
        <h5 style="margin: 0; padding-top: 5px" >Price: $65</h5>
      </div>
      </div>
      </div>
    </div>

    <div style="background-color: #9b5df7; display: flex; flex-direction: column; align-items: center; flex-wrap: wrap; border-radius: 16px; margin: 1.5rem 1rem ;">
      <div>
      
      <img
        src="https://openretro.org/image/50fa61da86e6917ca92bb606e3b4e34b08a9565d?s=2x"
        alt="not found"
        style="width: 10rem; height: 10rem; border-top-left-radius: 16px; border-top-right-radius: 16px"
      />
      <div style="display: flex; flex-direction: column; align-items: flex-start; ">
      <div style ="margin: 0.5rem 1rem; color: black">
        <h4 style="margin: 0; padding-top: 5px;"><b>Batman Returns</b></h4>
        <h5 style="margin: 0; padding-top: 5px" >Price: $60</h5>
      </div>
      </div>
      </div>
    </div>


  `;

    dom.window.document.getElementById("container").innerHTML = aux;
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
      subject:
        action === "purchase"
          ? "The summary of your purchase 🎉"
          : "Welcome to 16Bit 🚀",
      html: dom.serialize(),
    };

    const result = await transporter.sendMail(mailOptions);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
}

async function sendResetPass(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email_user: email,
      },
    });

    if (!user) return res.status(400).send("User not found");

    const token = jwt.sign({ id: user.id_user }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body style="margin: 0; padding: 0">
    <div style="width: 100%; background-color: #000;">
      
        <a href="https://16bit-gamestore.vercel.app/home" target="_blank" style="margin: 0%; background-color:black; display: flex;justify-content: center;">
          <img
            src="https://res.cloudinary.com/druj3xeao/image/upload/v1634145513/samples/16bit_p3aiqt.jpg"
            alt="16Bit"
            style="max-width: 40rem; height: 15rem; margin-bottom: 0%; margin: auto"
          />
        </a>
      
      <div style="background-color: rgb(0, 0, 0); padding: 0.1rem; border-top: solid 2px #9b5df7"; id="header"  >
        <p style="color: #fff; margin-left: 1rem">
          Hi, ${user.nickname_user}! Please enter to this link if you want to reset your 16Bit Gamestore account password:
        </p>
        <a href="https://16bit-gamestore.vercel.app/reset/${token}" style="text-decoration: none; margin-left: 1rem; font-size: 1.5rem">Click here! 🕹</a>
      </div>
      <div style="background-color: #000; color: lightgray; ">
        <p style="margin: 0 1rem; padding: 1rem 0">
        All rights reserved. All trademarks, service marks and company names are the property of their respective owners.
        © 16bitStore ~ This is a fictional project for the bootcamp.
      </p>  
      </div>
    </div>
  </body>
</html>`;

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
      subject: "Reset your password",
      html: html,
    };

    const result = await transporter.sendMail(mailOptions);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
}

async function statusEmail(req, res) {
  const { id_order, status } = req.body;

  try {
    const order = await Order.findOne({
      where: { id_order: id_order },
      include: {
        model: User,
        attributes: ["email_user", "nickname_user"],
      },
    });

    if (!order) return res.status(400).send("Order not found");

    let content =
      status === "delivered"
        ? "Your product/s have arrived! Enjoy them 😀."
        : "Your product/s are coming! Hope you are visiting us again soon 😀.";

    let linkContent =
      status === "delivered"
        ? "Leave us a review about your new videogame/s 🖋"
        : "Track your order! 🚀";

    const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
  </head>
  <body style="margin: 0; padding: 0">
    <div style="width: 100%; background-color: #000;">
      
        <a href="https://16bit-gamestore.vercel.app/home" target="_blank" style="margin: 0%; background-color:black; display: flex;justify-content: center;">
          <img
            src="https://res.cloudinary.com/druj3xeao/image/upload/v1634145513/samples/16bit_p3aiqt.jpg"
            alt="16Bit"
            style="max-width: 40rem; height: 15rem; margin-bottom: 0%; margin: auto"
          />
        </a>
      
      <div style="background-color: rgb(0, 0, 0); padding: 0.1rem; border-top: solid 2px #9b5df7"; id="header"  >
        <p style="color: #fff; margin-left: 1rem">
          Hi, ${order.user.nickname_user}! ${content}
        </p>
        <a href="https://16bit-gamestore.vercel.app/orderdetail/${order.userIdUser}/${order.id_order}" style="text-decoration: none; margin-left: 1rem; font-size: 1.5rem">${linkContent}</a>
      </div>
      <div style="background-color: #000; color: lightgray; ">
        <p style="margin: 0 1rem; padding: 1rem 0">
        All rights reserved. All trademarks, service marks and company names are the property of their respective owners.
        © 16bitStore ~ This is a fictional project for the bootcamp.
      </p>  
      </div>
    </div>
  </body>
</html>`;

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
      to: order.user.email_user,
      subject:
        status === "dispatched"
          ? "Your purchase is coming!"
          : "Enjoy your new videogame/s!",
      html: html,
    };

    const result = await transporter.sendMail(mailOptions);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  sendUserMail,
  sendResetPass,
  statusEmail,
};
