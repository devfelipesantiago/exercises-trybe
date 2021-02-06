const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('getUserName - async/await', () => {
  it('should check if the user was found', async () => {
    expect.assertions(1);
    const result = await getUserName(4);
    expect(result).toStrictEqual('Mark');
  });

  it('returns an error', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toStrictEqual({ error: 'User with 1 not found.' });
    }
  });
});