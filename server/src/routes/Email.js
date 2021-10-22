const { Router } = require("express");
const router = Router();

const {
  sendUserMail, sendResetPass, statusEmail
} = require("../controllers/Email");



router.post("/", sendUserMail);
router.post("/reset", sendResetPass);
router.post("/status", statusEmail);
module.exports = router;
