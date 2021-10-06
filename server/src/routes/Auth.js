const { Router } = require("express");
const checkSignUp = require("../middlewares/checkSignUp");
const { logIn, signUp, getRole } = require("../controllers/Auth");
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

const router = Router();

router.post("/signup", checkSignUp, signUp);
router.post("/login", logIn);
router.post("getRole", checkJwt, getRole);
router.post("/reqToken", checkJwt, (req, res) => {
  res.send("Token provided");
});
router.post("/reqAdmin", checkJwt, reqAdmin, (req, res) => {
  res.send("Authorized");
});

module.exports = router;
