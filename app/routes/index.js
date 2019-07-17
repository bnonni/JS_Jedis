var express = require("express"); //require middleware
var router = express.Router(); //import router
const User = require("../models/user"); //require mongoose connection & model

/* Get home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login/game", (req, res) => {
  res.render("game");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("login");
});

router.get("/leaderboard", (req, res) => {
  res.render("leaderboard");
});

router.post("/login", (req, res) => {
  var username = req.body.log_username;
  var userpass = req.body.log_password

  var login = {
    uname: username,
    pass: userpass
  }
  console.log(login);

  User.findOne({ "username": username }, (err, user) => {
    if (user == null) {
      console.log(err);
      res.render("login", { login_fail_msg: "Login failed! Username not found. Please register for an account!" });
    } else if (userpass != user.password) {
      console.log(user);
      res.render("login", { login_fail_msg: "Password Invalid! Please try again." });
    }
    else if ((!err) && (userpass == user.password)) {
      console.log(user);
      res.redirect(302, "/login/game");
    }
  })
});

router.post("/register", (req, res) => {
  // Get our form values
  var name = req.body.name;
  var username = req.body.reg_username;
  var email = req.body.email;
  var password = req.body.reg_password2;

  //Create new mongoose schema
  var user = new User({ name, email, username, password });

  //Save user to db
  user.save()
    .then(item => {
      res.render("login");
      console.log(item + " saved to Database!")
    })
    .catch(err => {
      var error = "Registration failed! Please try again!";
      res.render("login", { register_fail_msg: error });
      console.log("Error saving to database " + err);
    });
});


module.exports = router;