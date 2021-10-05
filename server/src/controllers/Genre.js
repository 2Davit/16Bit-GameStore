const { Genre } = require('../db')
const axios = require('axios');

async function createBulkGenre(req, res, next) {
  try {
    await Genre.bulkCreate(req.body)
    res.status(200).json('Genre successfully created');
  } catch (err) {
    console.log(err)
  }
};

async function createNewGenre(req, res, next) {
  try {
    let {genre} = req.body;
    if(genre.length > 0) {
      await Genre.findOrCreate({where: {name_genre: genre}})
    res.status(200).json('Genre successfully created');
    } else{
      res.status(404).send('Genre name cannot be empty');
    }
  } catch (err) {
    console.log(err)
  }
};


module.exports = {
  createNewGenre,
  createBulkGenre
}
