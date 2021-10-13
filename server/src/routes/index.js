const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
/* const axios = require ('axios') */
const AuthRoutes = require("./Auth");
const GenreRoutes = require("./Genre");
const PlatformRoutes = require("./Platform");
const ProductRoutes = require("./Product");
const UserRoutes = require("./User");
const OrderRoutes = require("./Order");
const Favorite = require('./Favorite')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/auth', AuthRoutes);
router.use('/genres',  GenreRoutes); 
router.use('/platforms', PlatformRoutes);
router.use('/videogames', ProductRoutes);
router.use('/user', UserRoutes);
router.use('/order', OrderRoutes);
router.use('/favorites', Favorite)


module.exports = router;
