import { findAll } from '../dao/pessoa/Pessoa';
import { Application } from 'express';

export function pessoaController(app) {

    app.get('/pessoas', function (req, res){
        findAll()
        .then(pessoas => res.status(200).send(pessoas))
        .catch(error => console.error(`error ${error}`))
    });

}