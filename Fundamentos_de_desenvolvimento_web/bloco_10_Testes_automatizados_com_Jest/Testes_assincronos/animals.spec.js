const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    const animal = Animals.find((animal) => animal.name === name);
    if (animal) resolve(animal);
    return reject('Nenhum animal com esse nome!');
  })
);

const getAnimal = (name) => {
  return findAnimalByName(name)
    .then(animal => animal);
};

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    const animals = Animals.filter((animal) => animal.age === age);
    if (animals.length !== 0) resolve(animals);
    return reject('Nenhum animal encontrado!');
  })
);

const getAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal);
};

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!'));
    });
  });
});

// --------------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o a idade', () => {
    test('Verifique o primeiro nome do animal no array retornado', () => {
      expect.assertions(1);
      return expect(getAge(5)).resolves.toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAge(3)).rejects.toBe('Nenhum animal encontrado!');
    });
  });
});
