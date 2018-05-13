const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { isEmail, isEmpty } = require("validator");
const router = express.Router();
const jwt = require('jsonwebtoken');

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
			status: 0,
			err: err
		});
	}
	User.findOne({ email: newUser.email }).then(user => {
		if (user) {
			err.push("Email already registered");
			res.send({
				status: 0,
				err: err
			});
		} else {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;

					newUser.password = hash;
					const USER = new User(newUser)
					USER
						.save()
						.then(user => {
							res.status(200).send({
								status: 1,
								msg: "Successfully registered"
							});
						})
						.catch(err => {
							throw err;
						});
				});
			});
		}
	});
});

router.post("/login", (req, res, next) => {
	passport.authenticate("local", { session: false }, (err, user, info) => {
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.send({
				status: 0,
				...info
			});
		}
		req.logIn(user, function (err) {
			if (err) {
				return next(err);
			}

			const token = jwt.sign({ _id: user.id, email: user.email }, '#pyaarEkDhokaHai');

			return res.status(200).send({
				status: 1,
				...info,
				user: {
					id: user.id,
					email: user.email,
					name: user.name
				},
				token
			});
		});
	})(req, res, next);
});

module.exports = router;
