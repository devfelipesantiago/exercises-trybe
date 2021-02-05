const data = require('./part002');

const { encode, decode } = data;

describe('Parte 2', () => {
    test('Verica se encode e decode são funções', () => {
        expect(typeof encode === 'function').toEqual('function');
    });
});