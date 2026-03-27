const { getCars, addCar } = require('../models/carModel');

const fetchCars = (req, res) => {
  res.json(getCars());
};

const createCar = (req, res) => {
  addCar(req.body);
  res.json({ message: "Car added successfully" });
};

module.exports = { fetchCars, createCar };
