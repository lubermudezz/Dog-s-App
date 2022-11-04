const { Router } = require('express');
const { breedsList, findDogById, createNewDog, deleteDog } = require('./controller');
const router = Router();

router.get('/', breedsList) 
router.get('/:dogId', findDogById)  
router.post('/', createNewDog)  
router.delete('/:id', deleteDog)



module.exports = router;
