const express = require('express');

const router = express.Router();

//busco los modelos de la base de datos
const User = require('../models/users.models')


//mando get "User.find" parametro de mongodb, mostrar todos los user
router.get('/',async(req, res) => {
    const users = await User.find();
    res.json(users);
});

//mando get por id para mostrar los usuarios por id
router.get('/:id', async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
});

// borrar usuario "findbyidandremove" viene de mongodb
router.delete('/:id', async(req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'delete user'});
});

//put para actualizar usuario por id
router.put('/:id', async(req, res) => {
    const { email, password } = req.body;
    const userEdit = { email, password };
    await User.findByIdAndUpdate(req.params.id, userEdit);
    res.json({ status: 'User Editado'});
});

//crear usuario
router.post('/', async(req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.json({ status: 'User Save'});
});

//modulo exporto
module.exports = router;

