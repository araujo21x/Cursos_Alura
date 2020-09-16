const Sequelize = require('sequelize');
const dataBase = require('../index');

const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('ração', 'brinquedos'),
    allowNull: false
  },
};

const options = {
  freezeTableName: false,
  tableName: 'companies',
  timestamps: true
};

module.exports = dataBase.define('company', columns, options);