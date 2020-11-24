import express from 'express';
import linksRouter from './routes/links';

const app = express();
// Usando o formato json de dados
app.use(express.json());
//
app.use(linksRouter);

export default app;
