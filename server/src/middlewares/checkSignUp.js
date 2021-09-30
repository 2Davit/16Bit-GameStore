const { User } = require("../db");

const checkSignUp = async (req, res, next) => {
  const { username, email } = req.body;
  const existingUser = await User.findOne({
    where: {
      nickname_user: username,
    },
  });

  const existingMail = await User.findOne({
    where: {
      email_user: email,
    },
  });

  if (existingUser) {
    return res.status(400).send("Failed! Username already in use!");
  }

  if (existingMail) {
    return res.status(400).send("Failed! email already in use");
  }

  next();
};

module.exports = checkSignUp;
