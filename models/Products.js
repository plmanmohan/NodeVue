const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER, 
});

module.exports = Products;