const {Router} = require('express')

const router = Router();


const { createOrder, createPayment, saveOrder, getOrders } = require('../controllers/Order')


router.get('/', getOrders)
router.post("/", createOrder)
router.get("/payment", createPayment)
router.post("/save", saveOrder)


module.exports = router;