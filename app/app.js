const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  bodyParser = require("body-parser"),
  logger = require('morgan'),
  mongoose = require("mongoose"),
  db = require('./models/db'),
  passport = require("passport"),
  indexRouter = require('./routes/index'),
  usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//server packages setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//homepage render handler
app.use('/', indexRouter);
app.use(function (req, res, next) {
  next(createError(404));
});

//error page render handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/users", usersRouter);

module.exports = app;
