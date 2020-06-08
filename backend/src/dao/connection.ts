import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lab', 'root', '', {
  host: '',
  dialect:'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;