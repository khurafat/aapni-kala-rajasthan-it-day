const db = require('../connections/mysqlConnection');
const Sequelize = require('sequelize');

const User = db.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: Sequelize.STRING,
        unique: true
    },
    email: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    phoneNumber: {
        type: Sequelize.STRING,
        unique: true,
        required: true
    },
    password: {
        type: Sequelize.STRING,
        required: true
    }
});

module.exports = User;