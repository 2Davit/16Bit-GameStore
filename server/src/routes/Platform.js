const {Router} = require('express')

const router = Router();

const { createNewPlatform, createBulkPlatform, getAllPlatform } = require('../controllers/Platform')

router.get("/", getAllPlatform)
router.post("/", createBulkPlatform)
router.post("/onePlatform", createNewPlatform)


module.exports = router;
