const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
	name: {
		type: String,
		default: "Anonymous",
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	date: {
		type: Date,
		default: Date.now
	}
});

mongoose.model("user", User);
