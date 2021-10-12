const { User } = require("../db");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const nodemailer = require("nodemailer");

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
    const users = await User.findAll()
    const userData = users.map(u => {
      return {
        id_user: u.id_user,
        nickname: u.nickname_user,
        name: u.name_user,
        lastname: u.lastname_user,
        address: u.address_user,
        email: u.email_user,
        active: u.is_active
      }
    })
    res.status(200).send(userData)
  } 
  catch(err){
    res.status(404).send(err)
  }
}

async function sendUserMail (req, res){

  let {email} = req.body;

  let transporter = nodemailer.createTransport({
    host: 'imap.ethereal.email',
    post: 993,
    secure: false,
    auth: {
        user: 'guido.gambin',
        pass: 'sagbdfnDBBpnUtzdmZ'
    }
})
//diosquezfran@gmail.com

  let mailOptions = {
    from: "Remitente",
    to: email,
    subject: "Gracias por su compra",
    text: "Gracias por confiar en 16-bits"
  } 

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      res.status(500).send(error.message)
    }else {
      console.log('email enviado');
      res.status(200).send(req.body)
    }
  })

}

module.exports = {
  postUser,
  getUsers,
  sendUserMail
};
