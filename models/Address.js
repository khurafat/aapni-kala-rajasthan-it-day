const db = require('../connections/mysql');
const Sequelize = require('sequelize');

const Address = db.define('address', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    house: {
        type: Sequelize.STRING
    },
    street: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    },
    pinCode: {
        type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.INTEGER,
        required: true
    }
});

module.exports = Address;