const Sequelize = require('sequelize');

const db = new Sequelize('simulator', 'simadmin', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
});

// db.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then ( function () {
//     db.sync ({ force: true }).then ( function () {
//         // Do something...
//     });
// });

db.sync()
    .then(() => {
        console.log("Database Synchronised");
    })
    .catch((err) => {
        console.log("Error setting up Database");
        console.error(err);
    });

module.exports = db;