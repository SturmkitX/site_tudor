var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Item = require('./api/models/item'),
    multer = require('multer');

require('./socket');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TudorDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer({dest: 'carousel'}).any());
app.use(express.static('public'));
app.use(express.static('carousel'));

// app.set('view engine', 'pug');

var routes = require('./api/routes/test_routes'); //importing route
routes(app); //register the route
routes = require('./api/routes/item');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
console.log(module.exports === exports);
