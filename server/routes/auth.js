const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { isEmail, isEmpty } = require("validator");
const router = express.Router();
const jwt = require("jsonwebtoken");

const isAuthenticated = require("../config/middlewares/authRoutes");

const User = require("../models/user");

router.post("/signup", (req, res) => {
	const newUser = req.body;

	const err = null;
	switch (true) {
		case !isEmail(newUser.email):
			err = "Not a valid Email";
			break;
		case isEmpty(newUser.name):
			err = "Not a valid Username";
			break;
		case isEmpty(newUser.password):
			err = "Not a valid password";
			break;
		case newUser.password < 6:
			err = "Password should be 6 character";
			break;
	}
	if (err) {
		res.send({
			status: 0,
			err: err
		});
	}
	User.findOne({ email: newUser.email }).then(user => {
		if (user) {
			res.send({
				status: 0,
				err: "Email already registered"
			});
		} else {
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;

					newUser.password = hash;
					const USER = new User(newUser);
					USER.save()
						.then(user => {
							res.status(200).send({
								status: 1,
								message: "Successfully registered"
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
		req.logIn(user, function(err) {
			if (err) {
				return next(err);
			}

			const token = jwt.sign(
				{ _id: user.id, email: user.email },
				"#pyaarEkDhokaHai"
			);

			return res
				.status(200)
				.cookie("randomly_token", token, {
					sameSite: true,
					httpOnly: true,
					expires: ""
				})
				.send({
					status: 1,
					...info,
					user: {
						id: user.id,
						email: user.email,
						name: user.name
					}
				});
		});
	})(req, res, next);
});

router.post("/authenticate", isAuthenticated, (req, res, next) => {
	const u = req._user;
	User.findById(u._id).then(user => {
		if (user) {
			return res.send({
				status: 1,
				user: {
					id: user.id,
					name: user.name,
					email: user.email
				},
				message: "Authentication Successful"
			});
		} else {
			return res.send({
				status: 0,
				err: "Unauthorized Access! Please login."
			});
		}
	});
});

router.post("/logout", isAuthenticated, (req, res) => {
	return res
		.status(200)
		.clearCookie("randomly_token", {
			sameSite: true,
			httpOnly: true,
			expires: ""
		})
		.send();
});

module.exports = router;
