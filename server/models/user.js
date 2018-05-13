const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	}
});

mongoose.model("user", User);
