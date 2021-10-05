const {  Platform } = require('../db')
const axios = require('axios')

async function createBulkPlatform(req,res){
    try{
      await Platform.bulkCreate(req.body)
    res.status(200).json('Plataforma creada con exito');
    } catch(err){
      console.log(err)
    }
  }
  async function createNewPlatform(req, res, next) {
    try {
      let {platform} = req.body;
      await Platform.findOrCreate({where: {name_platform: platform}})
      res.status(200).json('Plataforma creado con exito');
    } catch (err) {
      res.status(404).send('Error en: ', err)
    }
  };

  module.exports = {
    createNewPlatform,
    createBulkPlatform
  }
  