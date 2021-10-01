const {  Product, Genre, Platform} = require('../db')
const axios = require('axios');


//filtra por on_sale
async function listProductOnSale(req, res){
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
      console.log(error)
    }
  };

  async function getProductByGenre(req,res){
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
  };

  async function getProductByPlatform(req,res){
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
  };
  async function getAllProduct(req, res){
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
  };
  async function postOneProduct(req, res){
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
  };
  
  async function postProduct(req, res){
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
  };


  async function getProductById(req, res){
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
  };
  
  module.exports = {
    listProductOnSale,
    getProductByGenre, 
    getProductByPlatform,
    postOneProduct,
    getProductById,
    postProduct,
    getAllProduct
  }
  