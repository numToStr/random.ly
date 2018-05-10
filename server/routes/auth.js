const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { isEmail, isEmpty } = require("validator");
const router = express.Router();

require("../models/user");
const User = mongoose.model("user");

router.post("/signup", (req, res) => {
	const newUser = req.body;
	const err = [];
	switch (true) {
		case !isEmail(newUser.email):
			err.push("Not a valid Email");
		case isEmpty(newUser.name):
			err.push("Not a valid newUsername");
		case isEmpty(newUser.password):
			err.push("Not a valid password");
		case newUser.password < 6:
			err.push("Password should be 6 character");
	}
	if (err.length) {
		res.send({
			err: err
		});
	}
	User.findOne({ email: newUser.email }).then(user => {
		if (user) {
			err.push("Email already registered");
			res.send({
				err: err
			});
		} else {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;

					newUser.password = hash;
					new User(newUser)
						.save()
						.then(user => {
							res.send(user);
						})
						.catch(err => {
							throw err;
						});
				});
			});
		}
	});
});

router.post("/login", (req, res) => {
	res.send({
		data: req.body,
		msg: "Successful"
	});
});

module.exports = router;
