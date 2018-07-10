const bcrypt = require("bcryptjs");

const User = require("../models/user");

const updateName = (req, res) => {
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
};

const updateEmail = (req, res) => {
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
};

const updatePassword = (req, res) => {
	const U = req._user;
	const { "prev-password": prevPassword, password } = req.body;

	User.findById(U._id).then(user => {
		bcrypt.compare(prevPassword, user.password, (err, isMatch) => {
			if (err) throw err;
			if (isMatch) {
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(password, salt, (err, hash) => {
						if (err) throw err;

						User.findByIdAndUpdate(
							U._id,
							{ password: hash },
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
									message: "Password successfully changed"
								});
							}
						});
					});
				});
			} else {
				return res.status(200).send({
					status: 0,
					err: "Incorrect password"
				});
			}
		});
	});
};

module.exports = { updateName, updateEmail, updatePassword };
