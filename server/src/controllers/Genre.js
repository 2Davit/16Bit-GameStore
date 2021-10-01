const { Genre } = require('../db')
const axios = require('axios');

async function createNewGenre(req, res, next){
    try{
    res.json(await Genre.bulkCreate(req.body));
    } catch(err){
      console.log(err)
    }
  };

  module.exports = {
    createNewGenre
  }
  