const { Platform } = require("../db");
const axios = require("axios");

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};

async function createBulkPlatform(req, res) {
  try {
    await Platform.bulkCreate(req.body);
    res.status(200).json("Platform successfully created");
  } catch (err) {
    console.log(err);
  }
}
async function createNewPlatform(req, res, next) {
  try {
    let { platform } = req.body;

    await Platform.findOrCreate({ where: { name_platform: platform } });
    res.status(200).json("Plataforma creado con exito");
  } catch (err) {
    res.status(404).send("Error en: ", err);
  }
}

async function getAllPlatform(req, res, next) {
  try {
    const allPlatform = await Platform.findAll();
    const cleanPlatform = allPlatform.map((el) => capitalize(el.name_platform));

    res.status(200).send(cleanPlatform);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = {
  createNewPlatform,
  createBulkPlatform,
  getAllPlatform,
};
