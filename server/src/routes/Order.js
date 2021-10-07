const {Router} = require('express')

const router = Router();

const { createOrder } = require('../controllers/Order')

router.post("/", createOrder)


module.exports = router;