const {Router} = require('express')

const router = Router();


const { createOrder, createPayment, saveOrder, getOrders, getOrderDetail } = require('../controllers/Order')


router.get('/', getOrders)
router.get('/:idOrder', getOrderDetail)
router.post("/", createOrder)
router.get("/prueba/payment", createPayment)
router.post("/save", saveOrder)


module.exports = router;