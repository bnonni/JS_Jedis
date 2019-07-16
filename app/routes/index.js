var express = require('express'); //require middleware
var router = express.Router(); //import router
const User = require('../models/user'); //require mongoose connection & model

/* Get home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/login', (req, res) => {
  res.render('login');
  var username = req.body.reg_username;
  var user_pass = req.body.reg_password

  User.get('users').findOne({ "username": username }, (err, user) => {
    err = { error: "Login failed!", message: "Please register for an account!" };
    if (err) {
      req.flash('fail_message', err);
      res.redirect('login', err)
    } else {
      user.comparePassword(user_pass, function (err, isMatch) {
        if (err) {
          err.message = "Password Invalid!";
          req.flash('fail_message', err);
          res.redirect('login', err);
        }
        else {
          req.flash("success_msg", "Valid credentials, logging in. Please wait!");
          res.redirect("dashboard");
        }
      });
    }
  });
});

router.get("/register", (req, res) => {
  res.render("login");
});

router.post('/register', (req, res) => {
  // Get our form values
  var first = req.body.firstname;
  var last = req.body.lastname;
  var username = req.body.reg_username;
  var email = req.body.email;
  var password = req.body.reg_password;

  //Create new mongoose schema
  var user = new User({ first, last, email, username, password });

  //Save user to db
  user.save()
    .then(item => {
      req.flash('success_msg', 'You are registered and can now log in!');
      res.redirect("login");
      console.log(item + " saved to Database!")
    })
    .catch(err => {
      res.redirect("error");
      console.log("Error saving to database " + err);
    });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});


module.exports = router;