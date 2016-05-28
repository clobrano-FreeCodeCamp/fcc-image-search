'use strict';
var express = require('express');
var routes = require('./routes/index');
var imageSearch = require('./routes/image_search');

var app = express();
app.use('/', routes);
app.use('/api/search/', imageSearch);

app.listen(3000, function() {
    console.log('App listening on port 3000');
});
