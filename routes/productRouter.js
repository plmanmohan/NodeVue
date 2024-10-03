const express = require('express');
const {addProduct, getAllProducts} = require('../controllers/productControllers');

const router = express.Router();
router.get('/', getAllProducts);
router.post('/', addProduct);

module.exports = router;