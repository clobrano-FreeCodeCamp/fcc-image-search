var router = require('express').Router();

router.get('/:query', function(req, res) {
    var offset = req.param('offset');
    res.send('You searched: ' + req.params.query + ' offset: ' + offset);
});

module.exports = router;
