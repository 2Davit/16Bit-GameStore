const { Router } = require("express");

const router = Router();

const { postUser, getUsers } = require("../controllers/User");

router.post("/", postUser);
router.get("/", getUsers);

module.exports = router;
