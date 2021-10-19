const { Router } = require("express");
const { logIn, signUp, getRole, signInGoogle, setPass } = require("../controllers/Auth");
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

const router = Router();

router.post("/signup", signUp);
router.post("/google", signInGoogle);
router.post("/login", logIn);
router.post("/reset/:token", setPass);
router.get("/getRole", checkJwt, getRole); 

// Se sigue usando el getID? O era de prueba?
router.get("/getID", checkJwt, (req, res) => {
  const id = req.userId;
  res.status(200).send({ id: id });
});

// Rutas de testeo, borrarlas más adelante
router.post("/reqToken", checkJwt, (req, res) => {
  res.send("Token provided");
});
router.post("/reqAdmin", checkJwt, reqAdmin, (req, res) => {
  res.send("Authorized");
});

module.exports = router;
