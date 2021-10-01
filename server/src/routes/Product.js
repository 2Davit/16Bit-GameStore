const {Router} = require('express')

const router = Router();

const { listProductOnSale, getProductByGenre, getProductByPlatform, getProductById, getAllProduct, postOneProduct, postProduct } = require('../controllers/Product')

router.get("/Onsale", listProductOnSale)
router.get("/Genres", getProductByGenre)
router.get("/Platform", getProductByPlatform)
router.get("/", getAllProduct)
router.get("/:id", getProductById)
router.post("/OneGame", postOneProduct)
router.post("/", postProduct)

module.exports = router;

