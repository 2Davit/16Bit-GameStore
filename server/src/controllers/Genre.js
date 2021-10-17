const { Genre } = require("../db");
const axios = require("axios");

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

async function createBulkGenre(req, res, next) {
  try {
    await Genre.bulkCreate(req.body);
    res.status(200).json("Genre successfully created");
  } catch (err) {
    console.log(err);
  }
}

async function createNewGenre(req, res, next) {
  try {
    let { genre } = req.body;
    if (genre.length > 0) {
      await Genre.findOrCreate({ where: { name_genre: genre } });
      res.status(200).json("Genre successfully created");
    } else {
      res.status(404).send("Genre name cannot be empty");
    }
  } catch (err) {
    res.status(404).send("Error en: ", err);
  }
}
//
async function getAllGenre(req, res, next) {
  try {
    const allGenres = await Genre.findAll();
    const cleanGenres = allGenres.map((el) => capitalize(el.name_genre));

    res.status(200).send(cleanGenres);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = {
  createNewGenre,
  createBulkGenre,
  getAllGenre,
};
