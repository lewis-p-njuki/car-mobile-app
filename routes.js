const express = require('express');
const router = express.Router();

const { fetchCars, createCar } = require('../controllers/carController');
const validateCar = require('../middleware/validateCar');

router.get('/', fetchCars);
router.post('/', validateCar, createCar);

module.exports = router;
