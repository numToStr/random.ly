const jwt = require("jsonwebtoken");

const authRoutes = (req, res, next) => {
	const token = req.cookies.randomly_token;

	if (token) {
		try {
			const u = jwt.verify(token, "#pyaarEkDhokaHai");
			req._user = u;
			next();
		} catch (error) {
			return res.send({
				status: 0,
				err: "Unauthorized Access! Please login."
			});
		}
	} else {
		return res.send({
			status: 0
		});
	}
};

module.exports = authRoutes;
