const mongoose = require('mongoose');

// conectar a la base de datos segun lo que creaste
const URI = 'mongodb://localhost/users';
mongoose.connect(URI)
    .then (db => console.log('db connected'))
    .catch (err => console.log(err));

module.exports = mongoose