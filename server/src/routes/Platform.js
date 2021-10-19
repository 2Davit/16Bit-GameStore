const { Router } = require("express");
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

const router = Router();

const {
  createNewPlatform,
  createBulkPlatform,
  getAllPlatform,
} = require("../controllers/Platform");

router.get("/", getAllPlatform);
router.post("/",  checkJwt, reqAdmin,  createBulkPlatform);
router.post("/onePlatform", checkJwt, reqAdmin, createNewPlatform);

module.exports = router;
