const jwt = require("jsonwebtoken");

const { SECRET } = process.env;

const checkJwt = async (req, res, next) => {
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

module.exports = checkJwt;
