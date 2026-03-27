let cars = [];

const getCars = () => cars;

const addCar = (car) => {
  cars.push(car);
};

module.exports = { getCars, addCar };
