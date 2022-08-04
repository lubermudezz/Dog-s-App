const { Router } = require('express');
const { breedsList, findDogById, createNewDog } = require('./controller');
const router = Router();

router.get('/', breedsList) // get a /dogs
router.get('/:dogId', findDogById)  // get a /dogs/:id
router.post('/', createNewDog)  // post a /dogs



module.exports = router;
