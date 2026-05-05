const express = require('express');
 
const v1Router = require('./v1');

const apiRouter = express.Router();

apiRouter.use('/v1', v1Router); //if any request comes and it continues with /v1, we mapto v1Router

module.exports = apiRouter;

