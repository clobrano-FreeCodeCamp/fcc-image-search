'use strict';
var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var imageSearch = require('./routes/image_search');
var latestSearch = require('./routes/latest_search');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// routes
app.use('/', routes);
app.use('/api/imagesearch/', imageSearch);
app.use('/api/latest/imagesearch', latestSearch);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('App listening on port ' + port);
});
