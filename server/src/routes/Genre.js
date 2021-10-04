const {Router} = require('express')

const router = Router();

const { createNewGenre, createBulkGenre, getAllGenre } = require('../controllers/Genre')

router.get("/", getAllGenre)
router.post("/", createBulkGenre)
router.post("/oneGenre", createNewGenre)


module.exports = router;
