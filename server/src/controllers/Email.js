const Sequelize = require("sequelize");
const { Product, User, favorites } = require("../db.js");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

async function sendUserMail(req, res) {
  const { email, username, action, info } = req.body;
  const { cart, total } = info;
  let message;

  switch (action) {
    case "purchase":
      message =
        "We really appreciate your last visit. Hope you are enjoying your new videogame!";
      break;

    case "signup":
      message =
        "You are welcome to our 16Bit community. Get your cart and start shopping!";
      break;

    default:
      message;
  }

  const html = `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <style>
      table, td, div, h1, p {font-family: Arial, sans-serif;}
    </style>
  </head>
  <body style="margin:0;padding:0;">
    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#000;">
      <tr>
        <td align="center" style="padding:0;">
          <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
            <tr>
              <td align="center" style="padding:40px 0 30px 0;background:#300643;">
                <img src="https://res.cloudinary.com/druj3xeao/image/upload/v1634145513/samples/16bit_p3aiqt.jpg" alt="" width="300" style="height:auto;display:block;" />
              </td>
            </tr>
            <tr>
              <td style="padding:36px 30px 42px 30px;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                  <tr>
                    <td style="padding:0 0 36px 0;color:#153643;">
                      <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">Hello, ${username}! ${message}</h1>
                      <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">The total amount of your order is: $${total}</p>
                      <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a target="_blank" href="https://16-bit-game-store.vercel.app/home" style="color:#ee4c50;text-decoration:underline;">16-Bit</a></p>
                    </td>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;background:#ee4c50;">
                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                  <tr>
                    <td style="padding:0;width:50%;" align="left">
                      <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                        &reg; Someone, Somewhere 2021<br/><a href="http://www.example.com" style="color:#ffffff;text-decoration:underline;">Unsubscribe</a>
                      </p>
                    </td>
                    <td style="padding:0;width:50%;" align="right">
                      <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                        <tr>
                          <td style="padding:0 0 0 10px;width:38px;">
                            <a href="http://www.twitter.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/tw_1.png" alt="Twitter" width="38" style="height:auto;display:block;border:0;" /></a>
                          </td>
                          <td style="padding:0 0 0 10px;width:38px;">
                            <a href="http://www.facebook.com/" style="color:#ffffff;"><img src="https://assets.codepen.io/210284/fb_1.png" alt="Facebook" width="38" style="height:auto;display:block;border:0;" /></a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
};
