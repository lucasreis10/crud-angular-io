import { Model, DataTypes} from 'sequelize';
import sequelize from '../connection';

class Pessoa extends Model {}

Pessoa.init({
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
    // Now the users table in the database corresponds to the model definition
    return Pessoa.create({
        nome: 'John',
        sobrenome: 'Hancock',
        idade: 20
        });
    });
}

