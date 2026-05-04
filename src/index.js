const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/server.config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


app.get("/ping", (req,res) => {
    res.json({message:"Problem Service is alive"});
})

app.listen(PORT, () => {
    console.log("Server is listening at PORT:", PORT);
})