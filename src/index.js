const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const  {BaseError}  = require('./errors/base.error')

const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.use('/api', apiRouter) //if any request comes and it starts with api, we mapto apiRouter
app.get("/ping", (req,res) => {
    res.json({message:"Problem Service is alive"});
})


app.use(errorHandler); //last middleware

app.listen(PORT, () => {
    console.log("Server is listening at PORT:", PORT);
    
})  
