const res = require("express/lib/response")

function problemController(req,res) {
    res.json({
        message: "problem controller is up"
    })
}


function addProblem(req,res) {


}

function getProblem(req,res) {


}

function getProblems(req,res) {


}

function deleteProblem(req,res) {


}

function updateProblem(req,res) {


}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    problemController
}