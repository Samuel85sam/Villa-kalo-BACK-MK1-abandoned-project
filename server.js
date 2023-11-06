require('dotenv').config();

const express = require('express');
require('express-async-errors')

const cors = require('cors');
const router = require('./Router/router')

const {PORT,NODE_ENV} = process.env; //← dotenv

const db = require('./models')

db.sequelize.authenticate()
.then(() => console.log('==> Connexion DB ok!'))
.catch((error)=> console.log(`==> Connection DB foirée!!!${error}`));

if(NODE_ENV === 'development'){
    db.sequelize.sync({alter: {drop: false}});
};// ← migration DB

//creation server webAPI

const app = express();

app.use(cors());
app.use(express.json());

// Ajout du routing --> respect du RESTfull on ajoute '/api' comme route de base
app.use('/api', router)

app.listen(3002, () => {
    console.log(`==> Web server running on port 3000`);
});

