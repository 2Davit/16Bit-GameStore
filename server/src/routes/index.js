const { Router } = require("express");
const { Genre, Platform, Product } = require("../db");

const router = Router();

router.post("/genres", async (req, res) => {
    res.json(await Genre.bulkCreate(req.body))
});

router.post("/platforms", async (req, res) => {
    res.json(await Platform.bulkCreate(req.body))
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
        name_platform
    } = req.body

    try {
        let genreDB = await Genre.findAll({
            where: {
                name_genre: name_genre
            }
        })
        let platformDB = await Platform.findAll({
            where: {
                name_platform: name_platform
            }
        })
       /*  console.log("acaaaa", genreDB, platformDB) */
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
           /*  name_genre,
            name_platform */
        })
        console.log('antes', productCreated)
        productCreated.addGenre(genreDB)
        productCreated.addPlatform(platformDB)

        console.log('despues', productCreated)
   res.status(200).send("Product succesfully added")
    } 
    catch (err) {
       /*  res.status(400).send("Error") */
       console.log(err)
    }



})




module.exports = router;
