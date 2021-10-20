const {Router} = require('express')
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

const router = Router();


const { createOrder, createPayment, saveOrder, getOrders, getOrderDetail, setStatusOrder } = require('../controllers/Order')


router.get('/', getOrders)
router.get('/:idOrder', getOrderDetail)
router.post("/", createOrder)
router.get("/prueba/payment", createPayment)
router.post("/save", saveOrder)
router.put("/:idOrder/:newStatus",  setStatusOrder)

module.exports = router;