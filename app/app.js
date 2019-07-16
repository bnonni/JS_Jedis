const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  bodyParser = require("body-parser"),
  logger = require('morgan'),
  passport = require("passport"),
  index = require('./routes/index'),
  users = require("./routes/api/users");;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//server packages setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//view render handlers
app.use('/', index);
//validator & password encryption
app.use(passport.initialize());
require("./config/passport")(passport);
// app.use("/api/users", users);

app.use((req, res, next) => {
  next(createError(404));
});

//error page render handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;