var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource api');
  // next();
});

router.get('/abc', function(req, res, next) {
  res.json('respond with a resource api abc');
  // next();
});

module.exports = router;
