const {  Platform } = require('../db')
const axios = require('axios')

async function createBulkPlatform(req,res){
    try{
      await Platform.bulkCreate(req.body)
    res.status(200).json('Platform successfully created');
    } catch(err){
      console.log(err)
    }
  }
  async function createNewPlatform(req, res, next) {
    try {
      let {platform} = req.body;
      if(platform.length > 0) {
        await Platform.findOrCreate({where: {name_platform: platform}})
      res.status(200).json('Platform successfully created');
      } else{
        res.status(404).send('Platform name cannot be empty');
      }
    } catch (err) {
      res.send(error)
    }
  };

  module.exports = {
    createNewPlatform,
    createBulkPlatform
  }
  