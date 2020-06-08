import express from 'express';
import { pessoaController } from './pessoa-controller';
import configMiddleware from './config-middleware';

const app = express();

configMiddleware(app);

pessoaController(app);

export default app;


