const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
 name: String,
 email: String,
 password: String
});
module.exports = user = mongoose.model("users", userSchema);

