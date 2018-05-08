const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Routes Imports
const auth = require("./server/routes/auth");

// "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath C:\data\db
mongoose
	.connect("mongodb://localhost:27017/randomLy")
	.then(() => console.log("MongoDB successfully connected!"))
	.catch(e => console.log(e));

const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

/*
    1) React proxy will not work with only root url, which just have '/'.
    2) Make sure you add specific domain to work with react proxy i.e., '/user/login' or '/user/signup'.
*/

app.listen(PORT, () => {
	console.log(`Server is up on port: ${PORT}`);
});

app.get("/", (req, res) => {
	res.send({
		welcome: "home"
	});
});

// routes registration
app.use("/auth", auth);
