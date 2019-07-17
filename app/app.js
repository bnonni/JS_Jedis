const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  bodyParser = require("body-parser"),
  logger = require('morgan'),
  index = require('./routes/index'),
  session = require('express-session');


var app = express();
var secret = Math.ceil(Math.random() * 90000 + 10000).toString();
var session_cookie = app.use(cookieParser(secret));
var FileStore = require('session-file-store')(session);
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
  store: new FileStore,
  cookie: session_cookie
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//server packages setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//view render handlers
app.use('/', index);

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