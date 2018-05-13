const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const User = new Schema({
	name: {
		type: String,
		default: "Anonymous",
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
	},
	tokens: [{
		access: {
			type: String,
			required: true
		},
		token: {
			type: String,
			required: true
		}
	}]
});

User.methods.authToken = function () {
	const user = this;
	const access = 'auth';

	var token = jwt.sign({ _id: user._id.toHexString(), access }, 'pyaarEkDhokaHai');
	user.tokens.push({ access, token });

	return user.save().then(() => token);
}

mongoose.model("user", User);
