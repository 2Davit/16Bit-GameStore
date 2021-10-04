const {Router} = require('express')

const router = Router();

const { createNewPlatform, createBulkPlatform } = require('../controllers/Platform')

router.post("/", createBulkPlatform)
router.post("/onePlatform", createNewPlatform)


module.exports = router;
