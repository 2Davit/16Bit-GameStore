const { Router } = require("express");

const router = Router();

const {
  sendUserMail, sendResetPass
} = require("../controllers/Email");



router.post("/", sendUserMail);
router.post("/reset", sendResetPass);
module.exports = router;
