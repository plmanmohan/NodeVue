const Users = require('../models/users.js');
const createUser = async (req, res) => {
    const {name, email, city} = req.body;
    const user = await Users.create({name, email, city});
    res.status(200).json(user);
};
const getAllUsers = async (req, res) => {
    const allUsers = await Users.findAll();
    res.status(200).json(allUsers);
};

module.exports = {
    createUser, getAllUsers
};