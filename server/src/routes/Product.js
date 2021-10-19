const { Router } = require("express");
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

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
  getReviews
} = require("../controllers/Product");

router.get("/Onsale", listProductOnSale);
router.get("/Genres", getProductByGenre);
router.get("/Platform", getProductByPlatform);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.post("/OneGame", checkJwt, reqAdmin, postOneProduct);
router.post("/",  checkJwt, reqAdmin,  postProduct);
router.put("/OneGame", checkJwt, reqAdmin, updateOneProduct);
router.delete("/OneGame/:id", checkJwt, reqAdmin, deleteOneProduct);
router.post("/review/:iduser/:idgame", addReview);
router.get("/review/:idProduct/:idUser", getReviews);


module.exports = router;
