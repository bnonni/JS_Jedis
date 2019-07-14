var mongoose = require('mongoose');
var uri = require('../config/keys');

mongoose
  .connect(uri.MongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


module.exports = mongoose;
