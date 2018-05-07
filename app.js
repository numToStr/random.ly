const express = require("express");
const app = express();

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

app.get("/", (req, res) => {
    res.send({
        welcome: "home"
    });
});

app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`);
});
