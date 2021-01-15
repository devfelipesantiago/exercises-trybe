const greetPeople = people => {
  const greeting = [];
  const salutation = 'Hello'
  
  for (const person in people) {
    greeting.push(`${salutation} ${people[person]}`); 
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
console.log(greetPeople(parameter));

const assert = require('assert');
assert.strictEqual(typeof greetPeople(), 'function')
assert.strictEqual(greetPeople(parameter), result);
