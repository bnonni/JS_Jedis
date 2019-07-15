var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
 res.sendFile(path.join(__dirname + '/login.html'));
});

// app.post('/login', function (req, res) {
//   var login_username = form.login_username.value,
//   var login_password = form.login_password.value;

//   var data = {
//     "register_password": password,
//     "register_username": username,

//   }

//   db.collection('details').insertOne(data, function (err, collection) {
//     if (err) throw err;
//     console.log("Record inserted Successfully");

//   });

//   return res.redirect('signup_success.html');
// })

module.exports = router;
