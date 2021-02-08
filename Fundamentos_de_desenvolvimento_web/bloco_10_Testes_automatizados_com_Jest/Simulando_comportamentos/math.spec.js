let { somar, subtrair, multiplicar, dividir } = require('./math');
jest.mock('./math');

it('should return the subtration', () => {
  const mockSub = jest.fn(subtrair);
  mockSub();
  expect(mockSub).toHaveBeenCalled();
});

test('#multiplicar', () => {
  multiplicar.mockReturnValue(10);
  expect(multiplicar()).toBe(10);
  expect(multiplicar).toHaveBeenCalled();
});

test('#somar', async () => {
  somar.mockImplementation((a, b) => a + b);
  somar(1, 2);
  expect(somar).toHaveBeenCalled();
  expect(somar).toHaveBeenCalledWith(1, 2);
  expect(somar(1, 2)).toBe(3);
});

test('#dividir', () => {
  dividir
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect(dividir()).toBe(2);
  expect(dividir).toHaveBeenCalledTimes(1);

  expect(dividir()).toBe(5);
  expect(dividir).toHaveBeenCalledTimes(2);

  expect(dividir()).toBe(15);
  expect(dividir).toHaveBeenCalledTimes(3);

  dividir(3, 5);
  expect(dividir).toHaveBeenCalledWith(3, 5);
  expect(dividir).toHaveBeenCalled();
});

test('subtrair restored', () => {
  const obj = { subtrair };
  const subMock = jest.spyOn(obj, 'subtrair');
  subMock.mockReturnValue(20);
  expect(subMock()).toBe(20);
  expect(subMock).toHaveBeenCalledTimes(2);

});
test('subtrair restored#', () => {
  subtrair.mockRestore();
  expect(subtrair()).toBe();
  expect(subtrair).toHaveBeenCalled();
});