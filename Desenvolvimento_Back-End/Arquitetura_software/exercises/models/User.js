const connection = require('./connection');

// Função que remove dos documentos da collection 'users', os campos indesejados
function formatUser(document) {
  const { _id, password, ...user } = document;
  const formattedResult = { id: _id, ...user, };
  return formattedResult;
}

// Criamos um método para verificar se os dados do usuário são válidos
function isValid({ firstName, lastName, email, password }) {
  const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
    return false;
  }
  return PASSWORD_REGEX.test(password);
}

// Função responsável por criar o usuário no banco de dados
function create({ firstName, lastName, email, password }) {
  return connection().then((db) => db
    .collection('users')
    .insertOne({ firstName, lastName, email, password }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

module.exports = {
  isValid,
  create,
};