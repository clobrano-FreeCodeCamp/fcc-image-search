var express = require('express')
var latestSearch = require('../lib/database.js').latestSearch;

var router = express.Router();

router.get('/', function(req, res){
    latestSearch(function(latest){
        var list = latest.map(function(item) {
            var tmp = {};
            tmp.query = item.query;
            tmp.date = item.date;
            return tmp;
        });
        res.send(list);
    });
});

module.exports = router;
