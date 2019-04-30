const express = require('express');
const morgan = require('morgan');
const path = require('path');

//carpeta build se instala todo desde react se le copia y se le pasa a react tiene que haber 2 copias en cada lado
//recordar editar package.json con nodemon "start": "nodemon src/index.js"

const app = express();
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000)

// Middlawares
app.use(morgan('dev'));
//te transforma todo en json
app.use(express.json());

// Routes de la la base
app.use('/api/users', require('./routes/user.routes'))

// Static File
app.use(express.static(path.join(__dirname, '../build')));

// Starting The Server
app.listen(app.get('port'), () =>{
    console.log('server online');
});