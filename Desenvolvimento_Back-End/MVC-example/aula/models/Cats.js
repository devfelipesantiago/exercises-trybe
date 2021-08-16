const connection = require('./connection');

const getAllCats = () => connection.execute('SELECT name, age FROM pet')
  .then(([resuts]) => resuts);

const createCat = async (name, age) => {
  await connection.execute('INSERT INTO per (name, age) VALUES (?,?)', [name, age]);
};

module.exports = {
  getAllCats,
  createCat,
};