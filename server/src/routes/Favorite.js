const {Router}= require('express');
const {getFavorites, postFavorites, deleteFavorites}= require('../controllers/Favorite')
const router= Router();

router.get('/:idUser', getFavorites);
router.post('/', postFavorites);
router.delete('/:idUser', deleteFavorites);

module.exports = router