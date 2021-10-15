const { Router } = require("express");

const router = Router();

const {
  listProductOnSale,
  getProductByGenre,
  getProductByPlatform,
  getProductById,
  getAllProduct,
  postOneProduct,
  postProduct,
  updateOneProduct,
  deleteOneProduct,
  addReview,
} = require("../controllers/Product");

router.get("/Onsale", listProductOnSale);
router.get("/Genres", getProductByGenre);
router.get("/Platform", getProductByPlatform);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.post("/OneGame", postOneProduct);
router.post("/", postProduct);
router.put("/OneGame", updateOneProduct);
router.delete("/OneGame/:id", deleteOneProduct);
router.post("/review/:id_user/:id_product", addReview);

module.exports = router;
