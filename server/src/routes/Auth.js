const { Router } = require("express");
const verifyUser = require("../controllers/Auth0");

const router = Router();

router.get("/signin", verifyUser);

module.exports = router;
