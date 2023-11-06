// Importation l'object Sequelize
const { Sequelize } = require('sequelize');

// Initilisation une nouvelle instance de l'object avec SQLite en paramètre
const sequelize = new Sequelize({
    dialect: 'mssql',
    database: 'Villa',
    username: 'kolloAdmin',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 1433 // Le port de base de SQL Server
});

    // Création de l'object db
const db = {};
module.exports = db;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Ajout des models
db.auth = require('./auth.model')(sequelize);
db.client = require('./client.model')(sequelize);
db.avis = require('./avis.model')(sequelize);
db.reservation = require('./reservation.model')(sequelize);

//db.photo = require('./photo.model')(sequelize);
