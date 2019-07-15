var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/register', function (req, res, next) {
 res.post('/register', function (req, res) {
  var register_password = req.body.register_password;
  var register_lastname = req.body.register_lastname;
  var register_username = req.body.register_username;
  var register_firstname = req.body.register_firstname;

  var data = {
   "register_password": password,
   "register_lastname": lastname,
   "register_username": username,
   "register_firstname": firstname,
  }

  db.collection('users').insertOne(data, function (err, collection) {
   if (err) throw err;
   console.log("Record inserted Successfully!");
  });

  return res.redirect('index.html');
 })
});

module.exports = router;
