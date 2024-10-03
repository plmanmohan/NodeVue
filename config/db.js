const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'Jayshriram@1', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;