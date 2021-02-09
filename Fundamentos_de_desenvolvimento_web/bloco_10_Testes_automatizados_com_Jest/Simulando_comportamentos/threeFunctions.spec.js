let upperCase = string => string.toUpperCase();
const charat = string => string.charAt(0);
const concatString = (string1, string2) => string1.concat(string2);

test('return lowerCase', () => {
  const lowerCase = jest.fn(upperCase)
    .mockImplementation(string => string.toLowerCase());
  expect(lowerCase('CASA')).toBe('casa');
  expect(lowerCase).toHaveBeenCalled();
  expect(lowerCase).toHaveBeenCalledWith('CASA');
  expect(lowerCase).toHaveBeenCalledTimes(1);
});

test('return last letters', () => {
  const lastLetter = jest.fn(charat)
    .mockImplementation(string => string.split('')[string.split('').length - 1]);
  expect(lastLetter('xablau')).toBe('u');
  expect(lastLetter).toHaveBeenCalled();
  expect(lastLetter).toHaveBeenCalledWith('xablau');
  expect(lastLetter).toHaveBeenCalledTimes(1);
});

test('return concat', () => {
  const concat = jest.fn(concatString)
    .mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

  expect(concat('xablau', 'ichinoam', `automagica`)).toBe('xablauichinoamautomagica');
});