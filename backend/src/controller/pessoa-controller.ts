import { findAll } from '../dao/pessoa/Pessoa';

export function pessoaController(app) {

    app.get('', function (req, res){
        findAll()
        .then(pessoas => res.status(200).send(pessoas))
        .catch(error => console.error(`error ${error}`))
    });
}