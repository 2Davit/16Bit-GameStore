const { Genre } = require('../db')
const axios = require('axios');

async function createBulkGenre(req, res, next) {
  try {
    await Genre.bulkCreate(req.body)
    res.status(200).json('Generos creados con exito');
  } catch (err) {
    console.log(err)
  }
};

async function createNewGenre(req, res, next) {
  try {
    let {genre} = req.body;
    await Genre.findOrCreate({where: {name_genre: genre}})
    res.status(200).json('Genero creado con exito');
  } catch (err) {
    res.status(404).send('Error en: ', err)
  }
};


module.exports = {
  createNewGenre,
  createBulkGenre
}
