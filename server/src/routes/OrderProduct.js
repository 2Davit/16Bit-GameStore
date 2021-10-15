const {Router} = require('express')

const router = Router();


const { getOrderDetail } = require('../controllers/OrderProduct')


router.get('/', getOrderDetail)


module.exports = router;