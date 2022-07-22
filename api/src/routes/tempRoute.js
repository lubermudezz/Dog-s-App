const { Router } = require('express');
const { getAllTemps } = require('./controller');
const router = Router();

router.get('/', getAllTemps)


module.exports = router;
