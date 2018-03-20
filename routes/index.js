var express = require('express');
var router = express.Router();
var Product = require('../models/Product')

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.findAll({
		}).then((products) => {
			return res.render('index', {products: products})
		}).catch((error) => {
			return response.json({
				error: error
			});
		});
	
  // res.sendFile(__dirname + '/../viewsindex.html');
});

module.exports = router;
