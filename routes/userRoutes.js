const {createUser, getAllUsers} = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);

module.exports = router;