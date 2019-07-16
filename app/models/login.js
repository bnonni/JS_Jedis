const uri = require('../config/keys'),
 mongoose = require("mongoose");

var db = mongoose.connect(uri.MongoURI, { useNewUrlParser: true });
var loginSchema = new mongoose.Schema({ username: String, password: String });
var login = mongoose.model("users", loginSchema);

module.exports = login;