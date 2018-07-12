const express = require("express");
const router = express.Router();

const isAuthenticated = require("../config/middlewares/authRoutes");

const {
	updateName,
	updateEmail,
	updatePassword,
	deleteUser
} = require("../controllers/user");

router.put("/name", isAuthenticated, updateName);

router.put("/email", isAuthenticated, updateEmail);

router.put("/password", isAuthenticated, updatePassword);

router.delete("/delete", isAuthenticated, deleteUser);

module.exports = router;
