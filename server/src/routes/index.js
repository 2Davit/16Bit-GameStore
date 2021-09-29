const { Router } = require("express");
const { Genre, Platform, Product, User } = require("../db");

const router = Router();

//Ruta de posteo de géneros.
router.post("/genres", async (req, res) => {
  res.json(await Genre.bulkCreate(req.body));
});

//Ruta de posteo de plataformas.
router.post("/platforms", async (req, res) => {
  res.json(await Platform.bulkCreate(req.body));
});

//Rutas de videogames.
//Ruta de get de todos los videogames.
router.get("/videogames", async (req, res) => {
  try {
    const getDbInfo = async () => {
      return await Product.findAll({
        include: [
          {
            model: Genre,
            attributes: ["name_genre"],
            trough: {
              attributes: [],
            },
          },
          {
            model: Platform,
            attributes: ["name_platform"],
            trough: {
              attributes: [],
            },
          },
        ],
      });
    };
    const dbInfoA = await getDbInfo();
    const dbInfoB = await dbInfoA.map((el) => {
      return {
        id_product: el.dataValues.id_product,
        name_product: el.dataValues.name_product,
        price_product: el.dataValues.price_product,
        description_product: el.dataValues.description_product,
        thumbnail_product: el.dataValues.thumbnail_product,
        in_stock: el.dataValues.in_stock,
        on_sale: el.dataValues.on_sale,
        release_year: el.dataValues.release_year,
        name_genre: el.dataValues.genres?.map((el) => el.name_genre),
        name_platform: el.dataValues.platforms?.map((el) => el.name_platform),
      };
    });
    const { name } = req.query;
    if (name) {
      let gameName = await dbInfoB.filter((v) =>
        v.name_product.toLowerCase().includes(name.toLowerCase())
      );
      if (gameName.length >= 1) return res.status(200).send(gameName);
      res
        .status(404)
        .send("The videogame doesn't exist, please check the name");
    } else {
      res.status(200).send(dbInfoB);
    }
    //fin del try!!!!
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

//Ruta posteo de un post.
router.post("/videogame", async (req, res) => {
  const {
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

//Ruta de posteo de post masivos.
router.post("/videogames", async (req, res) => {
  req.body.forEach(async (index) => {
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
    } = index;
    {
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
      } catch {
        res.status(404).send("Error");
      }
    }
  });
  res.status(200).send("Product succesfully added");
});

//Ruta de posteo de user.
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
