const { Router } = require('express');
const { breedsList, findDogById, createNewDog } = require('./controller');
const router = Router();

router.get('/', breedsList)
router.get('/:dogId', findDogById)
router.post('/', createNewDog)


module.exports = router;
