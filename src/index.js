const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

require('./connections/mysqlConnection');

const baseRoute = require('./routes/routeBase');
app.use('/api', baseRoute);

app.listen(5000, function() {
  console.log("Server is running at port " + 500);
});

module.exports = app;
