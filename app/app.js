const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  bodyParser = require("body-parser"),
  logger = require('morgan'),
  mongoose = require("mongoose"),
  db = require('./models/db'),
  passport = require("passport"),
  index = require('./routes/index'),
  users = require('./routes/users'),
  register = require('./routes/register'),
  login = require('./routes/login');;

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

//views render handlers
//homepage
app.use('/', index);
//validator & password encryption
app.use(passport.initialize());
require("./config/passport")(passport);
//register, login, users routes
app.use('/register', register);
app.use('/login', login);
app.use('/users', users);

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

app.post('/register', function(req,res){ 
  var register_password = req.body.register_password; 
  var register_lastname =req.body.register_lastname; 
  var register_username =req.body.register_username; 
  var register_firstname= req.body.register_firstname;

  var data = { 
      "register_password":password, 
      "register_lastname":lastname, 
      "register_username":username, 
      "register_firstname":firstname,
      
  } 
  
db.collection('details').insertOne(data,function(err, collection){ 
      if (err) throw err; 
      console.log("Record inserted Successfully"); 
            
  }); 
        
  return res.redirect('signup_success.html'); 
}) 


app.get('/',function(req,res){ 
res.set({ 
  'Access-control-Allow-Origin': '*'
  }); 
return res.redirect('index.html'); 
}).listen(3000) 


console.log("server listening at port 3000"); 


app.post('/login', function(req,res){ 
  var login_username = form.login_username.value,
  var login_password = form.login_password.value;
  
  var data = { 
      "register_password":password, 
      "register_username":username, 
      
  } 
  
db.collection('details').insertOne(data,function(err, collection){ 
      if (err) throw err; 
      console.log("Record inserted Successfully"); 
            
  }); 
        
  return res.redirect('signup_success.html'); 
}) 


app.get('/',function(req,res){ 
res.set({ 
  'Access-control-Allow-Origin': '*'
  }); 
return res.redirect('index.html'); 
}).listen(3000) 


console.log("server listening at port 3000"); 