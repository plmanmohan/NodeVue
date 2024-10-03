const Products = require('../models/Products');

const  addProduct = async (req, res) => {
    const {name, description, price, stock} = req.body;
    const product = await Products.create({name, description, price, stock});
    res.status(200).json(product);
};
const getAllProducts = async (req, res) => {
    const allProducts = await Products.findAll();
    res.status(200).json(allProducts);
};

module.exports = {
    addProduct, getAllProducts
};