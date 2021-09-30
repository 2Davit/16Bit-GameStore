const { Router } = require("express");
const { Genre, Platform, Product, User } = require("../db");
const checkSignUp = require("../middlewares/checkSignUp");
const { logIn, signUp } = require("../controllers/controllers");
const { verifyToken, isAdmin } = require("../middlewares/checkJwt");

const router = Router();

//Ruta de posteo de géneros.
router.post("/genres", async (req, res) => {
  res.json(await Genre.bulkCreate(req.body));
});

//Ruta de posteo de plataformas.
router.post("/platforms", async (req, res) => {
  res.json(await Platform.bulkCreate(req.body));
});

//filtra por on_sale

router.get("/videogamesOnsale", async (req, res) => {
  try {
    const gamesOnSale = await Product.findAll({
      where: {
        on_sale: true,
      },
      include: [
        {
          model: Genre,
          attributes: ["name_genre"],
          through: {
            attributes: [],
          },
        },
        {
          model: Platform,
          attributes: ["name_platform"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.status(200).send(gamesOnSale);
  } catch (error) {
    res.status(404).send("error");
  }
});

//filtra por genero
router.get("/videogamesGenres", async (req, res) => {
  try {
    const getDbInfo = async () => {
      return await Product.findAll({
        include: [
          {
            model: Genre,
            attributes: ["name_genre"],
            through: {
              attributes: [],
            },
          },
          {
            model: Platform,
            attributes: ["name_platform"],
            through: {
              attributes: [],
            },
          },
        ],
      });
    };
    const dbInfoA = await getDbInfo();
    const dbInfoB = await dbInfoA.map((el) => {
      return {
        name_platform: el.dataValues.platforms?.map((el) => el.name_platform),
        id_product: el.dataValues.id_product,
        name_product: el.dataValues.name_product,
        price_product: el.dataValues.price_product,
        description_product: el.dataValues.description_product,
        thumbnail_product: el.dataValues.thumbnail_product,
        in_stock: el.dataValues.in_stock,
        on_sale: el.dataValues.on_sale,
        release_year: el.dataValues.release_year,
        name_genre: el.dataValues.genres?.map((el) => el.name_genre),
      };
    });

    const { genre } = req.query;
    if (genre) {
      let gameGenre = await dbInfoB.filter((v) => {
        for (let i = 0; i < v.name_genre.length; i++) {
          if (v.name_genre[i] === genre) return v.name_genre[i];
        }
      });
      if (gameGenre.length >= 1) return res.status(200).send(gameGenre);
      res
        .status(404)
        .send(
          "No results match with the requested genre, please check the genre"
        );
    } else {
      res.status(200).send(dbInfoB);
    }
  } catch (error) {
    res.status(404).send("Hubo un error: " + error);
  }
});

//filtra por plataforma
router.get("/videogamesPlatform", async (req, res) => {
  try {
    const getDbInfo = async () => {
      return await Product.findAll({
        include: [
          {
            model: Genre,
            attributes: ["name_genre"],
            through: {
              attributes: [],
            },
          },
          {
            model: Platform,
            attributes: ["name_platform"],
            through: {
              attributes: [],
            },
          },
        ],
      });
    };
    const dbInfoA = await getDbInfo();
    const dbInfoB = await dbInfoA.map((el) => {
      return {
        name_platform: el.dataValues.platforms?.map((el) => el.name_platform),
        id_product: el.dataValues.id_product,
        name_product: el.dataValues.name_product,
        price_product: el.dataValues.price_product,
        description_product: el.dataValues.description_product,
        thumbnail_product: el.dataValues.thumbnail_product,
        in_stock: el.dataValues.in_stock,
        on_sale: el.dataValues.on_sale,
        release_year: el.dataValues.release_year,
        name_genre: el.dataValues.genres?.map((el) => el.name_genre),
      };
    });

    const { platform } = req.query;
    if (platform) {
      let gamePlatform = await dbInfoB.filter((v) => {
        for (let i = 0; i < v.name_platform.length; i++) {
          if (v.name_platform[i] === platform) return v.name_platform[i];
        }
      });
      if (gamePlatform.length >= 1) return res.status(200).send(gamePlatform);
      res
        .status(404)
        .send(
          "No results match with the requested genre, please check the genre"
        );
    } else {
      res.status(200).send(dbInfoB);
    }
  } catch (error) {
    res.status(404).send("Hubo un error: " + error);
  }
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
            through: {
              attributes: [],
            },
          },
          {
            model: Platform,
            attributes: ["name_platform"],
            through: {
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
        image_product: el.dataValues.image_product,
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



//Ruta posteo de un (1)videogame.

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
    genres,
    platforms,
  } = req.body;
  try {
    let genreDB = await Genre.findAll({
      where: {
        name_genre: genres,
      },
    });
    let platformDB = await Platform.findAll({
      where: {
        name_platform: platforms,
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
  } catch(error) {
    console.log(error)
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

//Ruta videogame por ID
router.get("/videogames/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let product = await Product.findByPk(id, {
      include: [
        {
          model: Platform,
          attributes: ["name_platform"],
          through: { attributes: [] },
        },
        {
          model: Genre,
          attributes: ["name_genre"],
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send("not found");
  }
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

// Rutas para testear autenticación

router.post("/signup", checkSignUp, signUp);
router.post("/login", logIn);
router.post("/reqToken", verifyToken, (req, res) => {
  res.send("Token provided");
});
router.post("/reqAdmin", verifyToken, isAdmin, (req, res) => {
  res.send("Authorized");
});

module.exports = router;
