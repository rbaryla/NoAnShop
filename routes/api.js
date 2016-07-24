var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource api');
});

router.get('/abc', function(req, res, next) {
  res.send('respond with a resource api abc',200);
});

module.exports = router;
