import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { pessoaController } from './pessoa-controller';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.use('/pessoas', pessoaController);

export default app;


