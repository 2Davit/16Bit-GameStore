const {Router} = require('express')

const router = Router();

const { createOrder, createPayment, getOrders  } = require('../controllers/Order')

router.get('/', getOrders)
router.post("/", createOrder)
router.get("/payment", createPayment)


module.exports = router;