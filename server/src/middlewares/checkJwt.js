const jwt = require("jsonwebtoken");
const { User } = require("../db.js");

const { SECRET } = process.env;

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("No token provided");
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send("Token is not valid");
  }
};

const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  if (user && user.is_admin) {
    return next();
  } else {
    return res.status(403).send("Require administrator permissions");
  }
};

const checkJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};

module.exports = checkJwt;
