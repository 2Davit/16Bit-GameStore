const { Router } = require("express");

const router = Router();

const { postUser, getUsers, deleteOneUser, banOneUser } = require("../controllers/User");

router.post("/", postUser);
router.get("/", getUsers);
router.delete("/:id", deleteOneUser);
router.put("/:id/:status", banOneUser);

module.exports = router;
