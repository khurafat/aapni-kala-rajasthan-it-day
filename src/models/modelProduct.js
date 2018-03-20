const db = require('../connections/mysqlConnection');
const Sequelize = require('sequelize');
const User = require('./modelUser');

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
    }
});

Product.hasOne(User, {
	foreignKey: 'user_id'
});

module.exports = Product;