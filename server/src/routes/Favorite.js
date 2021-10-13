const {Router}= require('express');
const {getFavorites, postFavorites, deleteFavorites}= require('../controllers/Favorite')
const router= Router();

router.get('/', getFavorites);
router.post('/', postFavorites);
router.delete('/', deleteFavorites);

module.exports = router