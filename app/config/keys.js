var username = process.env.MongoUsername;
var password = process.env.MongoPassword;

module.exports = {
 MongoURI: "mongodb+srv://" + username + ":" + password + "@jediadventures0-srodk.mongodb.net/jedi_adventures?retryWrites=true&w=majority",
 secretOrKey: "secret"
};

