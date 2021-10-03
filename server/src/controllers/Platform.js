const {  Platform } = require('../db')
const axios = require('axios')

async function createNewPlatform(req,res){
    try{
      await Platform.bulkCreate(req.body)
    res.status(200).json('Plataforma creada con exito');
    } catch(err){
      console.log(err)
    }
  }

  module.exports = {
    createNewPlatform
  }
  