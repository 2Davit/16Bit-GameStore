const {  Platform } = require('../db')
const axios = require('axios')

async function createNewPlatform(req,res){
    try{
    res.json(await Platform.bulkCreate(req.body));
    } catch(err){
      console.log(err)
    }
  }

  module.exports = {
    createNewPlatform
  }
  