const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send({
        welcome: 'home'
    })
})

app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`)
});