const {Router} = require('express')

const router = Router();

const { createOrder, createPayment, saveOrder  } = require('../controllers/Order')

router.post("/", createOrder)
router.get("/payment", createPayment)
router.post("/save", saveOrder)


module.exports = router;