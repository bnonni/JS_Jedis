const uri = require('../config/keys'),
  mongoose = require("mongoose");

var db = mongoose.connect(uri.MongoURI, { useNewUrlParser: true });
var userSchema = new mongoose.Schema({ name: String, email: String, username: String, password: String });
var user = mongoose.model("users", userSchema);

module.exports = user;