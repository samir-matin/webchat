const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
  user_id: String,
  text: String,
},
{
	timestamps: true
}
);

module.exports = MessageSchema;