const typeNumber = require('../typeNumber');
const { expect } = require('chai');

describe('function typeNumber', () => {
  describe('quando o numero positivo for parametro', () => {

    it('should return a string', () => {
      const result = typeNumber(0);
      expect(result).to.be.an('string');
    });

    it('is equal to parameter must be a number', () => {
      const result = typeNumber('AAAA');
      expect(result).to.be.equals('o parâmetro deve ser um número');
    });

    it('should return a positive number', () => {
      const result = typeNumber(10);
      expect(result).to.be.equals('positivo');
    });

    it('should return a negative number', () => {
      const result = typeNumber(-10);
      expect(result).to.be.equal('negativo');
    });

    it('should return a zero', () => {
      const result = typeNumber(0);
      expect(result).to.be.equals('neutro');
    });
  });
});