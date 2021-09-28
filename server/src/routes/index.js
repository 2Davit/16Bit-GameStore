const { Router } = require("express");
const { Genre, Platform, Product, User } = require("../db");

const router = Router();

router.post("/genres", async (req, res) => {
  res.json(await Genre.bulkCreate(req.body));
});

router.post("/platforms", async (req, res) => {
  res.json(await Platform.bulkCreate(req.body));
});

router.post("/videogames", async (req, res) => {
  const {
    id_product,
    name_product,
    price_product,
    description_product,
    image_product,
    thumbnail_product,
    in_stock,
    on_sale,
    release_year,
    name_genre,
    name_platform,
  } = req.body;

  try {
    let genreDB = await Genre.findAll({
      where: {
        name_genre: name_genre,
      },
    });
    let platformDB = await Platform.findAll({
      where: {
        name_platform: name_platform,
      },
    });
    let productCreated = await Product.create({
      id_product,
      name_product,
      price_product,
      description_product,
      image_product,
      thumbnail_product,
      in_stock,
      on_sale,
      release_year,
    });
    productCreated.addGenre(genreDB);
    productCreated.addPlatform(platformDB);
    res.status(200).send("Product succesfully added");
  } catch {
    res.status(404).send("Error");
  }
});
router.post("/user", async (req, res) => {
  const {
    id_user,
    nickname_user,
    name_user,
    lastname_user,
    avatar_user,
    address_user,
    email_user,
    password_user,
    is_admin,
    is_active,
  } = req.body;

  try {
    await User.create({
      id_user,
      nickname_user,
      name_user,
      lastname_user,
      avatar_user,
      address_user,
      email_user,
      password_user,
      is_admin,
      is_active,
    });
    res.status(200).send("User succesfully added");
  } catch {
    res.status(404).send("Error");
  }
});

module.exports = router;
