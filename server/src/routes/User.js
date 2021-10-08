const { Router } = require("express");

const router = Router();

const { postUser } = require("../controllers/User");

router.post("/", postUser);

module.exports = router;
