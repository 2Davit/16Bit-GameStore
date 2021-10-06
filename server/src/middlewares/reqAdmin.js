const reqAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  if (user && user.is_admin) {
    return next();
  } else {
    return res.status(403).send("Require administrator permissions");
  }
};

module.exports = reqAdmin;
