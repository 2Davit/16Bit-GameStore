const jwt = require("jsonwebtoken");

const { SECRET } = process.env;

const checkJwt = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res
      .status(403)
      .send({ message: "Must be authenticated (provide an access token)" });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Token is not valid" });
  }
};

module.exports = checkJwt;
