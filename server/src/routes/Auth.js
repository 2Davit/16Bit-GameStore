const { Router } = require("express");
const { logIn, signUp, getRole } = require("../controllers/Auth");
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

const router = Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/getRole", checkJwt, getRole);
router.get("/getID", checkJwt, (req, res) => {
  const id = req.userId;
  res.status(200).send({ id: id });
});
router.post("/reqToken", checkJwt, (req, res) => {
  res.send("Token provided");
});
router.post("/reqAdmin", checkJwt, reqAdmin, (req, res) => {
  res.send("Authorized");
});

module.exports = router;
