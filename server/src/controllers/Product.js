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
          name_platform: el.dataValues.platforms.map((el) => el.name_platform),
          id_product: el.dataValues.id_product,
          name_product: el.dataValues.name_product,
          price_product: el.dataValues.price_product,
          description_product: el.dataValues.description_product,
          thumbnail_product: el.dataValues.thumbnail_product,
          in_stock: el.dataValues.in_stock,
          on_sale: el.dataValues.on_sale,
          release_year: el.dataValues.release_year,
          name_genre: el.dataValues.genres.map((el) => el.name_genre),
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
          name_platform: el.dataValues.platforms.map((el) => el.name_platform),
          id_product: el.dataValues.id_product,
          name_product: el.dataValues.name_product,
          price_product: el.dataValues.price_product,
          description_product: el.dataValues.description_product,
          thumbnail_product: el.dataValues.thumbnail_product,
          in_stock: el.dataValues.in_stock,
          on_sale: el.dataValues.on_sale,
          release_year: el.dataValues.release_year,
          name_genre: el.dataValues.genres.map((el) => el.name_genre),
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
          name_genre: el.dataValues.genres.map((el) => el.name_genre),
          name_platform: el.dataValues.platforms.map((el) => el.name_platform),
        };
      });
      const { name } = req.query;
      if (name) {
        let gameName = await dbInfoB.filter((v) =>
          v.name_product.toLowerCase().includes(name.toLowerCase())
        );
        if (gameName.length >= 1) return res.status(200).send(gameName);
        if(gameName.length === 0) {
         return res.send([]);
        }
      } else {
        res.status(200).send(dbInfoB);
      }
      //fin del try!!!!
    } catch (error) {
      console.log(error);
      res.status(404).send({error: 'error back'});
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
    let validation = (name_product.length > 0 &&  name_product.length <= 50 && price_product > 0 && typeof price_product === 'number' && description_product.length > 0 && description_product.length < 1200 && image_product.length>0 && image_product.length <10 && thumbnail_product.length > 0 && thumbnail_product.length < 1200 && typeof in_stock === 'number' && typeof on_sale === 'boolean' &&release_year > 1950 && release_year < 2010 && Number.isInteger(release_year) && genres.length > 0 && platforms.length > 0)
    if(validation ) {
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
  } else {
    res.status(404).send('Please check all fields');
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
          res.status(200).send("Product succesfully added");
        } catch(err) {
          res.status(404).send(err);
        }
      }
    });
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

  async function updateOneProduct(req, res){
    const {
      id,
      name,
      price,
      description,
      image,
      thumbnail,
      stock,
      onSale,
      released,
      genre,
      platform,
    } = req.body;
    
    try {

      await Product.destroy({
        where: { id_product: id }
       })

      let genreDB = await Genre.findAll({
        where: {
          name_genre: genre,
        },
      });
      let platformDB = await Platform.findAll({
        where: {
          name_platform: platform,
        },
      });
      let productUpdated = await Product.create({
        id_product: id,
        name_product: name,
        price_product: price,
        description_product: description,
        image_product: image,
        thumbnail_product: thumbnail,
        in_stock: stock,
        on_sale: onSale,
        release_year: released,
      });
      productUpdated.addGenre(genreDB);
      productUpdated.addPlatform(platformDB);
      res.status(200).send("Product succesfully updated");
    } catch(error) {
      console.log(error)
      res.status(404).send("Error");
    }
  };


  async function deleteOneProduct(req, res) {

    const { id } = req.params;

    try {
      await Product.destroy({
        where: { id_product: id }
       })
       res.status(200).send("Product succesfully deleted");
       
    } catch(err) {
        res.status(404).send("Error");
    }
  };

  
  module.exports = {
    listProductOnSale,
    getProductByGenre, 
    getProductByPlatform,
    postOneProduct,
    getProductById,
    postProduct,
    getAllProduct,
    updateOneProduct,
    deleteOneProduct
  }
  