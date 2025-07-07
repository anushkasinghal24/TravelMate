const Tour = require('../models/Tour');

exports.getTours = async (req, res) => {
  const tours = await Tour.find();
  res.json(tours);
};

exports.createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  await newTour.save();
  res.status(201).json(newTour);
};
