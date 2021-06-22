const fs = require('fs/promises');

function operator(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    const types = [a, b, c].map((param) => typeof param);
    if (types.some((type) => type !== number)) {
      return reject(new Error('Informe apenas números'));
    }

    const resultado = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(resultado);
  })
}
