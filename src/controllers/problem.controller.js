
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');


const NotImplemented = require("../errors/notImplemented.error");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());

function pingController(req,res,next) {
    return res.json({
        message: "problem controller is up"
    })
}


async function addProblem(req,res,next) {
    try{

        console.log("incoming request body", req.body);

        const newproblem = await problemService.createProblem(req.body);
        res.status(StatusCodes.CREATED).json({
            success: "true",
            message: "successfully created a new problem",
            error: {},
            data: newproblem

        })
        
    }

    catch(error) {
        next(error)
    }
}

function getProblem(req,res) {
     try{
        //not implementedd
        throw new NotImplemented('addProblem')
    }

    catch(error) {
        next(error)
    }

}

function getProblems(req,res) {
     try{
        //not implemented
        throw new NotImplemented('addProblem')
    }

    catch(error) {
        next(error)
    }


}

function deleteProblem(req,res) {
    try{
        //not implemented
        throw new NotImplemented('addProblem')
    }

    catch(error) {
        next(error)
    }


}

function updateProblem(req,res) {
    try{
        //not implemented
        throw new NotImplemented('addProblem');
    }

    catch(error) {
        next(error)
    }
}




module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingController
}