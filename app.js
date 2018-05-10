const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Routes Imports
const auth = require("./server/routes/auth");

// "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --port 27017 --dbpath C:\mongodb\data\db
mongoose
	.connect("mongodb://localhost:27017/randomLy")
	.then(() => console.log("MongoDB successfully connected!"))
	.catch(e => console.log(e));

const PORT = process.env.PORT || 5000;

/* EXPRESS MIDDLEWARES */
// Request headers ==========
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// Body Parser ===========
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Passport Serialize or Deserialize ========
app.use(passport.initialize());
app.use(passport.session());

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
require("./server/config/passport")(passport);
