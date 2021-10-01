const {Router} = require('express')

const router = Router();

const { createNewPlatform  } = require('../controllers/Platform')

router.post("/", createNewPlatform)

module.exports = router;
