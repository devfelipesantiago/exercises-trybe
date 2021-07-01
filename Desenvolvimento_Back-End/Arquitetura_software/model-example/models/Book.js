const connection = require('./connection');
module.exports = {

  getAllBooks: async () => {
    const books = await connection.execute(
      'SELECT * FROM books;'
    );
    return books;
  },
  getByAuthorId: async (id) => {
    const books = await connection.execute('SELECT * FROM books WHERE author_id = ?', [id]);
    return books;
  },
  postBook: async (author_id, title) => {
    const books = await connection.execute(
      'INSERT INTO books (author_id, title) VALUES (?, ?)', [author_id, title],
    );
  }
};