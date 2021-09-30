const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../db.js");

const { SECRET } = process.env;

const signUp = async (req, res) => {
  const { username, password, email, name, lastname, adress } = req.body;
  await User.create({
    nickname_user: username,
    password_user: bcrypt.hashSync(password, 8),
    email_user: email,
    name_user: name,
    lastname_user: lastname,
    address_user: adress,
  });

  return res.status(200).send("User successfully registered!");
};

const logIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    where: {
      nickname_user: username,
    },
  });
  if (!user) {
    return res.status(404).send("User not found");
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password_user);

  if (!passwordIsValid) {
    return res.status(401).send("Wrong password");
  }

  const token = jwt.sign({ id: user.id_user }, SECRET, {
    expiresIn: 7200, // 2 hours
  });

  res.status(200).send({
    accessToken: token,
    username: user.nickname_user,
    email: user.email_user,
    adress: user.adress_user,
    name: user.name_user,
    lastname: user.lastname_user,
    isAdmin: user.is_admin,
    isActive: user.is_active,
  });
};

module.exports = {
  logIn,
  signUp,
};
