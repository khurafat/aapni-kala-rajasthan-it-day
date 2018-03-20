const express = require('express');
const route = express.Router();
const Product = require('../models/Product');
const User = require('../models/User');
const uuid = require('uuid4');

route.post('/product', (request, response) => {
	User.findOne({
		token: request.body.token
	}).then((user) => {
		Product.create({
			name: request.body.name,
			description: request.body.description,
			price: request.body.price,
			userId: user.id
		}).then((product) => {
			return response.json({
				result: product.get({
					plain: true
				})
			});
		}).catch((error) => {
			return response.json({
				error: error
			});
		});
	}).catch((error) => {
		return response.json({
			error: error
		});
	});
});

route.post('/register', (request, response) => {
	User.create({
		email: request.body.email,
		phoneNumber: request.body.phoneNumber,
		name: request.body.name,
		password: request.body.password,
		token: uuid()
	}).then((user) => {
		return response.json({
			result: user.get({
				attributes: { exclude: ['password'] },
				plain: true
			})
		});
	}).catch((error) => {
		return response.json({
			error: error
		});
	});
});

route.post('/login', (request, response) => {
	User.findOne({
		phoneNumber: request.body.phoneNumber
	}).then((user) => {
		if (user.password == request.body.password) {
			return response.json({
				result: user.get({
					plain: true
				})
			});
		} else {
			return response.json({
				result: "Invalid creds"
			});
		}
	}).catch((error) => {
		return response.json({
			error: error
		});
	});
});

module.exports = route;