const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = mongoose.model("user");

const local = passport => {
	passport.use(
		new LocalStrategy(
			{ usernameField: "email" },
			(email, password, done) => {
				User.findOne({ email: email }).then(user => {
					if (!user) {
						return done(null, null, { message: "Incorrect email or password." });
					}

					bcrypt.compare(password, user.password, (err, isMatch) => {
						if (err) throw err;
						if (isMatch) {
							return done(null, user, {
								message: "Login Successfull"
							});
						} else {
							return done(null, null, {
								message: "Incorrect email or password."
							});
						}
					});
				}).catch(e => done(e));
			}
		)
	);

	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});
};

module.exports = local;
