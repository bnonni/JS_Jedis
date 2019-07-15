var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.set({
    'Access-control-Allow-Origin': '*'
  });
  res.render('index', { title: 'Jedi Adventures' });
});

module.exports = router;
