const randomNumber = () => {
  return Math.round(Math.random() * 100);
};

test('Random number', () => {
  random = jest.fn(randomNumber)
    .mockReturnValue(10);

  expect(random()).toBe(10);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
});

test('Implementation div', () => {
  random.mockImplementationOnce((a, b) => a / b);
  expect(random(10, 2)).toBe(5);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(2);
})

test('multiplication', () => {
  random.mockImplementationOnce((a, b, c) => a * b * c);
  expect(random(10, 2, 3)).toBe(60);
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(3);
});