const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  //return arrays.reduce((acc, curr) => acc.concat(curr), []);
  return arrays.reduce((previous, current) => {
    current.forEach((number) => previous.push(number));
    return previous;
  });
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
