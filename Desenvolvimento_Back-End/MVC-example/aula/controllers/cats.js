const { Router } = require('express');
const rescue = require('express-rescue');
const { getAllCats, createCat } = require('../models/Cats');

const cats = new Router();

cats.get('/', rescue(async (req, res, _next) => {
  const cat = await getAllCats();

  res.render('catList', { cat });
}));

cats.post('/cats', rescue(async (req, res, _next) => {
  const { name, age } = req.body;

  const catId = await createCat(name, age);

  return res.render('catCreated', { catId });
}));

module.exports = cats;