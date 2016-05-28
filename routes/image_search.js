var router = require('express').Router();

router.get('/:query', function(req, res) {
    res.send('You searched: ' + req.params.query);
});

module.exports = router;
