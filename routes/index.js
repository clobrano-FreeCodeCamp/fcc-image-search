var router = require('express').Router();

// TODO: render the index page with a form to insert the query

router.get('/', function(req, res) {
    res.send('Image search API');
});

module.exports = router;

