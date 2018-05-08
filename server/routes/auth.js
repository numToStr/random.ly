const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
	res.send({
		data: req.body,
		msg: "Successful"
	});
});

module.exports = router;
