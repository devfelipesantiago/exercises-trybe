// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import BookService from '../services/books.service';

class BooksController {
  bookService: BookService;
  
  constructor(bookService = new BookService()) {
  this.bookService = bookService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };

  async getById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookService.getById(id);

    if (!book) {
      res.status(statusCodes.NOT_FOUND).json({ message: 'Book not found!'})
    } else {
      res.status(statusCodes.OK).json(book);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const book = req.body;
    const bookCreated = await this.bookService.create(book);
    res.status(statusCodes.CREATED).json(bookCreated);
  }

  async update(req: Request, res: Response): Promise<void> {
  const id = Number(req.params.id);
  const book = req.body;
  await this.bookService.update(id, book);

  res.status(statusCodes.NO_CONTENT).end();
  }
  
  async remove(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    await this.bookService.remove(id);

    res.status(statusCodes.NO_CONTENT).end();
  }
}

export default BooksController;

/**
Agora podemos criar nosso controller para chamar o service. Também não podemos esquecer de dar bind no método no construtor, caso contrário ocorrerá um erro de que o this é undefined quando formos rodar nossa aplicação. Você se lembra quando vimos sobre isso lá no conteúdo de eventos do módulo Front-end? Então, a mesma coisa se aplica aqui.

O uso do bindé uma peculiaridade do JavaScript/TypeScript, pois o objeto referenciado pela palavra reservada this depende do contexto em que o método está sendo executado. Quando utilizamos os métodos como callbacks nas rotas do Express, o contexto deles muda e o this não referencia mais o objeto da nossa classe. O mesmo ocorre quando utilizamos métodos de classe nos escutadores de evento do React.

Não se preocupe em entender profundamente sobre isso agora. Basta lembrar que precisamos sempre dar bind nos métodos dos nossos controllers. Outra alternativa seria escrevê-los com a sintaxe de arrow functions, ou envelopá-los em uma lá no arquivo das rotas, e então esse passo não seria necessário. Contudo, nesse exemplo optamos por utilizar o bind para deixar nosso código mais consistente mantendo o mesmo padrão de escrita em todas as classes.
*/