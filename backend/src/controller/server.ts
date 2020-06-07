import express from 'express';
import { json, urlencoded } from 'body-parser';
import { findAll, sync } from '../dao/pessoa/Pessoa';
import cors from 'cors';

const app = express();

app.use(urlencoded({
  extended: true
}));

app.use(json());

app.get('/', (req, res) => {
    res.send('Rodando');
});

app.use(cors());

app.get('/pessoas', (req, res) => {
  findAll()
  .then(pessoas => res.status(200).send(pessoas))
  .catch(error => console.error(`error ${error}`))
});

app.get('/sync', (req, res) => {
  sync();
});
  
app.listen(3000, function () {
    console.log('listening on port 3000');
});
