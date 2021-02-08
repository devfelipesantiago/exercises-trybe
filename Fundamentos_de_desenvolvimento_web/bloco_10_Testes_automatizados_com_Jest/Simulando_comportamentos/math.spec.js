let { somar, subtrair, multiplicar, dividir } = require('./math');
jest.mock('./math');

it('should return the subtration', () => {
  const mockSub = jest.fn(subtrair);
  mockSub();

  expect(mockSub).toHaveBeenCalled();
});


test('#multiplicar', () => {
  const mockMult = jest
    .fn(multiplicar).mockReturnValue(10);

  mockMult();
  expect(mockMult).toHaveBeenCalled();
  expect(mockMult()).toBe(10);
});

test('#somar', async () => {
  const mockSomar = jest.fn(somar)
    .mockImplementation((a, b) => a + b);
  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).toBe(3);
});

test('#dividir', () => {
  const mockDiv = jest
    .fn(dividir)
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect(mockDiv()).toBe(2);
  expect(mockDiv).toHaveBeenCalledTimes(1);

  expect(mockDiv()).toBe(5);
  expect(mockDiv).toHaveBeenCalledTimes(2);

  expect(mockDiv()).toBe(15);
  expect(mockDiv).toHaveBeenCalledTimes(3);

  mockDiv(3, 5);
  expect(mockDiv).toHaveBeenCalledWith(3, 5);
  expect(mockDiv).toHaveBeenCalled();
});

test('subtrair restored', () => {
  const subMock = jest.fn(subtrair)
    .mockReturnValue(20);
  afterEach(subMock.mockRestore);

  expect(subMock()).toBe(20);
  expect(subMock).toHaveBeenCalledTimes(1);

});
test('subtrair restored#', () => {
  const subMock = jest.fn(subtrair);

  expect(subMock()).toBe(20);
  expect(subMock).toHaveBeenCalled();
});