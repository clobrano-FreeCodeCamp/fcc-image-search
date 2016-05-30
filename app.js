'use strict';
var express = require('express');
var routes = require('./routes/index');
var imageSearch = require('./routes/image_search');

var app = express();
app.use('/', routes);
app.use('/api/search/', imageSearch);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('App listening on port ' + port);
});
