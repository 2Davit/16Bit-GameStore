const {Router} = require('express')

const router = Router();

const { createNewGenre } = require('../controllers/Genre')

router.post("/", createNewGenre)

module.exports = router;
