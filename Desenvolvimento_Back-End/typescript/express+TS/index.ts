// ./index.ts

import express, { Request, Response } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';
import booksRoutes from './routes/books.routes'
import errorMiddleware from './middleware/error.middleware';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use(booksRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});