const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({
        welcome: 'home'
    })
})

app.listen(PORT, () => {
    console.log(`Server is up on port: ${PORT}`)
});