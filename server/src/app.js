const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const axios = require('axios')

const User = require("../models/user");
const Conversation = require("../models/conversation");

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://localhost/webchatdb');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to webchatdb')
});

server.listen(3000);

app.get('/users/login', (req, res) => {
	User.findOne(req.query, (err, user) => {
		if (err) {
			res.status(500).send({success: false, error: err});
		} else {
			res.send({success: true, user_id: user._id});
		}
	})
})

app.post('/users/register', (req, res) => {
	let user = new User(req.body);
	user.save((err, user) => {
		if (err) {
			if (err.name === 'MongoError' && err.code === 11000) {
				res.status(409).send({success: false, error: 'A user with that username already exists!'});
			} else {
				res.status(500).send({success: false, error: err});
			}
		} else {
			res.send({success: true});
		}
	})
})

// let something = new User({username: 'cherrios', password: 'bananas'});
// axios.post('http://localhost:3000/users/register', something)
// .then(res => {
// 	//console.log(res.data);
// })
// .catch(err => {
// 	//console.log(err);
// })