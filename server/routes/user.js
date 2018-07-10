const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/user");

const isAuthenticated = require("../config/middlewares/authRoutes");

router.put("/name", isAuthenticated, (req, res) => {
	const U = req._user;
	const { name } = req.body;

	User.findByIdAndUpdate(U._id, { name }, { new: true }).then(
		({ id, name, email }) => {
			if (id) {
				res.status(200).send({
					status: 1,
					user: {
						id,
						name,
						email
					},
					message: "Name successfully changed"
				});
			}
		}
	);
});

router.put("/email", isAuthenticated, (req, res) => {
	const U = req._user;
	const { email, password } = req.body;

	User.findById(U._id).then(user => {
		bcrypt.compare(password, user.password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				User.find({ email }).then(_user => {
					if (_user.length) {
						res.status(200).send({
							status: 0,
							err: "Email already exist"
						});
					} else {
						User.findByIdAndUpdate(
							U._id,
							{ email },
							{ new: true }
						).then(({ id, name, email }) => {
							if (id) {
								res.status(200).send({
									status: 1,
									user: {
										id,
										name,
										email
									},
									message: "Email successfully changed"
								});
							}
						});
					}
				});
			} else {
				return res.status(200).send({
					status: 0,
					err: "Incorrect password"
				});
			}
		});
	});
});

module.exports = router;
