const express = require('express');
const route = express.Router();
const Product = require('../models/Product');
const Address = require('../models/Address');
const User = require('../models/User');
const uuid = require('uuid4');

route.post('/address', (request, response) => {
	User.findOne({
		token: request.headers.token
	}).then((user) => {
		Address.create({
			name: request.body.name,
			house: request.body.house,
			street: request.body.street,
			city: request.body.city,
			country: request.body.country,
			pinCode: request.body.pinCode,
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

route.get('/product', (request, response) => {
	User.findOne({
		token: request.headers.token
	}).then((user) => {
		Product.findAll({
			userId: user.id
		}).then((products) => {
			return response.json({
				result: products
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

route.post('/product', (request, response) => {
	User.findOne({
		token: request.headers.token
	}).then((user) => {
		Product.create({
			name: request.body.name,
			description: request.body.description,
			price: request.body.price,
			image: request.body.image,
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