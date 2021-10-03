const { Genre } = require('../db')
const axios = require('axios');

async function createNewGenre(req, res, next){
    try{
      await Genre.bulkCreate(req.body)
    res.status(200).json('Genero creado con exito');
    } catch(err){
      console.log(err)
    }
  };

  module.exports = {
    createNewGenre
  }
  