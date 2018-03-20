const db = require('../connections/mysqlConnection');
const Sequelize = require('sequelize');
const User = require('./User');

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

Product.belongsTo(User);
User.hasMany(Product);

module.exports = Product;