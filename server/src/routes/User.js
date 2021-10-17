const { Router } = require("express");
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

const router = Router();

const {
  postUser,
  getUsers,
  sendUserMail,
  deleteOneUser,
  banOneUser,
  updateOneUser,
  promoteToAdmin
} = require("../controllers/User");

router.post("/", postUser);
router.post("/mail", sendUserMail);
router.get("/", getUsers);
router.delete("/:id", deleteOneUser);
router.put("/:id/:status", banOneUser);
router.put("/updateuser", updateOneUser);
router.put("/admin/:admin/:id", promoteToAdmin )
module.exports = router;
