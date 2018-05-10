const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const router = express.Router();

require("../models/user");
const User = mongoose.model("user");

router.post("/signup", (req, res) => {
	const user = req.body;
	User.findOne({ email: user.email }).then(user => {
		if (user) {
			res.send({
				err: "Email already registered"
			});
		} else {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(user.password, salt, (err, hash) => {
					if (err) throw err;

					user.password = hash;
					new User(user)
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
