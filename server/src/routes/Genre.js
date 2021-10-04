const {Router} = require('express')

const router = Router();

const { createNewGenre, createBulkGenre } = require('../controllers/Genre')

router.post("/", createBulkGenre)
router.post("/oneGenre", createNewGenre)


module.exports = router;
