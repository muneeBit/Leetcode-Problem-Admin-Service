const express = require("express");

const problemRouter = require('./problems.routes');

const v1Router = express.Router();

v1Router.use('/problems', problemRouter); //if any request comes and it continues with /problem, we map it to ProblemRouter

module.exports=v1Router;