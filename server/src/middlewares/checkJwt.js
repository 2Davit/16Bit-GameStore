const jwt = require("jsonwebtoken");
const { User } = require("./db.js");

const { SECRET } = process.env;

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("No token provided!");
  }

  try {
    const decoded = await jwt.verify(token, SECRET);
    req.userId = decoded.id_user;
    next();
  } catch (err) {
    return res.status(401).send("Unauthorized");
  }
};

const isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    if (user.isAdmin === true) {
      return next();
    } else {
      return res.status(403).send("Require Admin Role!");
    }
  });
};

const checkJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};

module.exports = checkJwt;
