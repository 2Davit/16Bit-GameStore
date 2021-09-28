const { Router } = require("express");
const { Genre, Platform } = require("../db");

const router = Router();

router.post("/genres", async (req, res) => {
    res.json(await Genre.bulkCreate(req.body))
});

router.post("/platforms", async (req, res) => {
    res.json(await Platform.bulkCreate(req.body))
});

module.exports = router;
