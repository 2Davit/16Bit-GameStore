const { Router } = require("express");

const router = Router();

const {
  postUser,
  getUsers,
  deleteOneUser,
  banOneUser,
  updateOneUser,
} = require("../controllers/User");

router.post("/", postUser);
router.get("/", getUsers);
router.delete("/:id", deleteOneUser);
router.put("/:id/:status", banOneUser);
router.put("/updateuser", updateOneUser);
module.exports = router;
