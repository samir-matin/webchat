const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
  	type: String,
  	unique: true
  },
  password: String
});

let User = mongoose.model("User", UserSchema);
module.exports = User;