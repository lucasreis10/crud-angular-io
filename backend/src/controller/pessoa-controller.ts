import { findAll } from '../dao/pessoa/Pessoa';

export function pessoaController(app) {

    console.log(app);

    app.get('', function (req, res){
        findAll()
        .then(pessoas => res.status(200).send(pessoas))
        .catch(error => console.error(`error ${error}`))
    });

}