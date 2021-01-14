const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1
const turn = (object, key, value) => {
  object[key] = value;  
}
turn(lesson2, `turno`, `manha`)

// Exercicio 2
const listKeys = object => Object.keys(object);
//console.log(listKeys(lesson3));

// Exercicio 3
const sizeObject = obj => Object.keys(obj).length;
//console.log(sizeObject(lesson1));

// Exercicio 4
const listValue = obj => Object.values(obj);
//console.log(listValue(lesson2));

// Exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(allLessons);

// Exercicio 6
const totalStudants = obj => {
  let total = 0;
  const array = Object.keys(obj);
  for (key in array) {
    total += obj[array[key]].numeroEstudantes;      
  }
    return total;
};
//console.log(totalStudants(allLessons));

// Exercicio 7
const getValueByNumber = (obj, index) => Object.values(obj)[index];
//console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// Exercicio 8
const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  let isEqual = false;
  for (i in array) {
    if (array[i][0] === key && array[i][1] === value) isEqual = true;
    }
  return isEqual;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false