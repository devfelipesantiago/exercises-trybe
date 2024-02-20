const path = require('path');

const fs = require('fs').promises;

const simpsonsList = path.resolve(__dirname, 'simpsons.json');

async function imprimirIdEName(listaPesonagens) {
  try {
    const data = await fs.readFile(listaPesonagens, 'utf8');
    const simpsons = JSON.parse(data);
    const result = simpsons.map(({ id, name }) => `${id} - ${name}`);
    result.forEach(element => console.log(element));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

async function pegarSimpsonPorId(id) {
  const fileContent = await fs.readFile(simpsonsList, 'utf8');

  const simpsons = JSON.parse(fileContent);

  const result = simpsons.find(simpson => Number(simpson.id) === id);

  if (!result) {
    throw new Error('Id não foi encontrado');
  }

  return result;
}

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [ 1, 2, 3, 4 ];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([ { id: '15', name: 'Maggie Simpson' } ]);
  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

imprimirIdEName(simpsonsList);
pegarSimpsonPorId(10);