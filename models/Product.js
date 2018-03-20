const db = require('../connections/mysql');
const Sequelize = require('sequelize');

const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        required: true
    },
    description: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER,
        required: true
    },
    image: {
        type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.INTEGER,
        required: true
    }
});

module.exports = Product;