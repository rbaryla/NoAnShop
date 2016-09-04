var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve('../public/index.html'));
    next();
});

module.exports = router;
