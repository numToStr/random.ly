const express = require("express");
const router = express.Router();

const isAuthenticated = require("../config/middlewares/authRoutes");

const {
	updateName,
	updateEmail,
	updatePassword
} = require("../controllers/user");

router.put("/name", isAuthenticated, updateName);

router.put("/email", isAuthenticated, updateEmail);

router.put("/password", isAuthenticated, updatePassword);

module.exports = router;
