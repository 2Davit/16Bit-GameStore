const { Router } = require("express");
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

const router = Router();

const {
  createNewGenre,
  createBulkGenre,
  getAllGenre,
} = require("../controllers/Genre");

router.get("/", getAllGenre);
router.post("/", checkJwt, reqAdmin,  createBulkGenre);
router.post("/oneGenre", checkJwt, reqAdmin, createNewGenre);

module.exports = router;
