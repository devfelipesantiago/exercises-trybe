// index.js
const bodyParser = require('body-parser');
const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();
	res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

app.get('/books', async (_req, res) => {
	const [books] = await Book.getAllBooks();
	return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;
	const books = await Book.getByAuthorId(id);

	if (books.length === 0) return res.status(404).json({ message: 'Not Found!' });

	return res.status(200).json(books[0]);
});

app.post('/books', async (req, res) => {
	const { title, author_id } = req.body;
	if (!author_id || title === '' || title.split(' ').length < 3) res.status(400).json({ message: 'Dados inválidos!' });
	const author = await Book.postBook(author_id, title);
	res.status(201).json({ message: 'Livro criado com sucesso!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
