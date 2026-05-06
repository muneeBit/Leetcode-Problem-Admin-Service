const res = require("express/lib/response")

const {StatusCodes} = require("http-status-codes")
const NotImplemented = require("../errors/notImplemented.error")

function pingController(req,res,next) {
    return res.json({
        message: "problem controller is up"
    })
}


function addProblem(req,res,next) {
    try{
        //not implemented
        throw new NotImplemented('addProblem')
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
        throw new NotImplemented('addProblem')
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