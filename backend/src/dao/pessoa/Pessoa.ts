import { Model, DataTypes} from 'sequelize';
import sequelize from '..';

class Pessoa extends Model {}

Pessoa.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
}, {
    sequelize,
    tableName: 'PESSOA'
});

export function findAll() {
    return Pessoa
    .findAll();
  }
  
export function sync() {
    Pessoa.sync({ force: true }).then(() => {
    return Pessoa.create({
        nome: 'John',
        sobrenome: 'Hancock',
        idade: 20
        });
    });
}

