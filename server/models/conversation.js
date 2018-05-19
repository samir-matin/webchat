const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = require("../models/message");

let ConversationSchema = new Schema({
  username_id_1: String,
  username_id_2: String,
  messages: [MessageSchema]
});

let Conversation = mongoose.model("Conversation", ConversationSchema);
module.exports = Conversation;