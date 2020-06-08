import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lab', 'root', '', {
  host: 'lucas-mysql-lab.clivocypkkfs.us-east-2.rds.amazonaws.com',
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