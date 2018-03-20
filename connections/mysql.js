const Sequelize = require('sequelize');

const db = new Sequelize('simulator', 'simadmin', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

db.sync()
    .then(() => {
        console.log("Database Synchronised");
    })
    .catch((err) => {
        console.log("Error setting up Database");
        console.error(err);
    });

module.exports = db;