const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(
  config.get('mysql.dataBase'),
  config.get('mysql.user'),
  config.get('mysql.passworld'),
  {
    host: config.get('mysql.host'),
    dialect:  config.get('mysql.dialect')
  },
);

module.exports = sequelize;