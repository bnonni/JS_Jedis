var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.set({
    'Access-control-Allow-Origin': '*'
  });
  res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = router;
