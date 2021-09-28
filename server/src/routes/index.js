const { Router } = require("express");
const axios = require("axios");
const { Genre, Product } = require("../db");
const { apiKey } = process.env;

const router = Router();

module.exports = router;
