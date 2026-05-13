const express = require("express");
const { problemController } = require("../../controllers");
const { Problem } = require("../../models");

const problemRouter = express.Router();

problemRouter.get('/ping',problemController.pingController);
problemRouter.get('/:id',problemController.getProblem);
problemRouter.get('/',problemController.getAllProblems);
problemRouter.post('/',problemController.addProblem);
problemRouter.delete('/:id', problemController.deleteProblem);
problemRouter.put('/:id', problemController.updateProblem);

module.exports = problemRouter;