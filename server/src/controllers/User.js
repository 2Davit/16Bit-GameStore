const { User } = require("../db");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const nodemailer = require("nodemailer");
const { google } = require('googleapis');
const { html } = require('./helper');


async function postUser(req, res) {
  const {
    id_user,
    nickname_user,
    name_user,
    lastname_user,
    avatar_user,
    address_user,
    email_user,
    password_user,
    is_admin,
    is_active,
  } = req.body;

  try {
    await User.create({
      id_user,
      nickname_user,
      name_user,
      lastname_user,
      avatar_user,
      address_user,
      email_user,
      password_user,
      is_admin,
      is_active,
    });
    res.status(200).send("User succesfully added");
  } catch {
    res.status(404).send("Error");
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    const userData = users.map((u) => {
      return {
        id_user: u.id_user,
        nickname: u.nickname_user,
        name: u.name_user,
        lastname: u.lastname_user,
        address: u.address_user,
        email: u.email_user,
        active: u.is_active,
        created: u.createdAt,
      };
    });
    res.status(200).send(userData);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function deleteOneUser(req, res) {
  const { id } = req.params;

  try {
    await User.destroy({
      where: { id_user: id },
    });
    res.status(200).send("User succesfully deleted");
  } catch (err) {
    res.status(404).send("Error");
  }
}

async function banOneUser(req, res) {
  const { id, status } = req.params;

  try {
    await User.update({ is_active: status }, { where: { id_user: id } });
    res.status(200).send(`User ${status === "true" ? "unbanned" : "banned"}`);
  } catch (err) {
    res.status(404).send("Error");
  }
}

async function updateOneUser(req, res) {
  const { id, email, address, name, lastname } = req.body;
  try {
    await User.update(
      {
        email_user: email,
        address_user: address,
        name_user: name,
        lastname_user: lastname,
      },
      { where: { id_user: id } }
    );
    res.status(200).send("User updated");
  } catch (err) {
    res.status(404).send("Error");
  }
}
async function promoteToAdmin(req, res) {


  try {
      const {id, admin} = req.params;
    await User.update(
      {
        is_admin: admin
      },
      { where: { id_user: id } }
    );
    res.status(200).send("User updated");
  } catch (err) {
    res.status(404).send('hola');
    console.log(err)
  }
}

async function sendUserMail (req, res){

  let { email } = req.body;

  const CLIENT_ID = '629164237375-nd9vo40e7m7p82lr4s7bgecqebbn7i6v.apps.googleusercontent.com';
  const CLIENT_SECRET = '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';
  const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
  const REFRESH_TOKEN = '1//044c2jHqjFfgACgYIARAAGAQSNwF-L9Irv0YSqP8EJos551tZlxLetRQyLhatO8FnlGacYXpCR5rK1dnB0UnMJ11_roWPauDdmoM';

  const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
  );

  oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

  
  try {


  const accessToken = await oAuth2Client.getAccessToken();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'imap.ethereal.email',
    post: 993,
    secure: false,
    auth: {
        type: "OAuth2",
        user: 'guido.gambini@usal.edu.ar',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken
    }
})


  let mailOptions = {
    from: "16Bit-GameStore",
    to: email,
    subject: "The summary of your purchase",
    html: html
  }

  const result = await transporter.sendMail(mailOptions);
  res.status(200).send(result);


  } catch(err) {
    console.log(err)
  }
}


module.exports = {
  postUser,
  getUsers,
  sendUserMail,
  deleteOneUser,
  banOneUser,
  updateOneUser,
  promoteToAdmin
};
