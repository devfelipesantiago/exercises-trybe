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
