const sequelize = require('../config/db');
const {DataTypes} = require('sequelize');
const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    emailname: DataTypes.STRING,
    city: DataTypes.STRING,
});

module.exports = Users;