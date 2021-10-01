const {Router} = require('express');
const checkSignUp = require("../middlewares/checkSignUp");
const { logIn, signUp } = require("../controllers/Auth");
const { verifyToken, isAdmin } = require("../middlewares/checkJwt");

const router = Router();

router.post("/signup", checkSignUp, signUp);
router.post("/login", logIn);
router.post("/reqToken", verifyToken, (req, res) => {
  res.send("Token provided");
});
router.post("/reqAdmin", verifyToken, isAdmin, (req, res) => {
  res.send("Authorized");
});

module.exports = router;