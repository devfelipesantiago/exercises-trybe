const express = require('express');
const bodyParser = require('bodyParser');
const Author = require('./controllers/Author');
const app = express();
const errorMiddleware = require('./middlewares/error');

app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors', Author.findById);
app.post('/authors', Author.create);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
