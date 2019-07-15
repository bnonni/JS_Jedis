var express = require('express');
var router = express.Router();

/* GET login page */
router.get('/', function (req, res, next) {
 res.sendFile(path.join(__dirname + '/register.html'));

 app.post('/register', function (req, res) {
  var password = req.body.register_password;
  var lastname = req.body.register_lastname;
  var username = req.body.register_username;
  var firstname = req.body.register_firstname;

  var data = {
   "password": password,
   "lastname": lastname,
   "username": username,
   "firstname": firstname,
  }
 });

 //register route
 res.set({
  'Access-control-Allow-Origin': '*'
 });

 db.collection('users').insertOne(data, function (err, collection) {
  if (err) throw err;
  console.log("Record inserted Successfully!");
 });
 return res.redirect('index.html');
})

module.exports = router;
