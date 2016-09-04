var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.json('respond with a resource api');
});

router.get('/abc', function(req, res) {
    res.json('respond with a resource api abc');
});

module.exports = router;
