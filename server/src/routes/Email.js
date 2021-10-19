const { Router } = require("express");

const router = Router();

const {
  sendUserMail
} = require("../controllers/Email");



router.post("/", sendUserMail);
module.exports = router;
