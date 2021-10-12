const { Router } = require("express");

const router = Router();

const { postUser, getUsers, sendUserMail } = require("../controllers/User");

router.post("/", postUser);
router.post("/mail", sendUserMail);
router.get("/", getUsers);

module.exports = router;
