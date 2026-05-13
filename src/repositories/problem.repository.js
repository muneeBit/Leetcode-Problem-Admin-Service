const { Problem }= require("../models");
const { errorHandler } = require("../utils");
const NotFound = require('../errors/notfound.error');
const { deleteProblem } = require("../controllers/problem.controller");
const { ProblemService } = require("../services");

class ProblemRepository {
    
    
    async createProblem (problemData) {

        try {
            const problem = await Problem.create({
            title: problemData.title,
            description: problemData.description,
            testCases: problemData.testCases? problemData.testCases : []
        });

        return problem;
    }
    catch(error) {
        console.log(error);
        throw error;

    }
    }

    async getAllProblems() {
        try {

        const problem = await Problem.find({});
        return problem;

        }

        catch(error) {
            console.log(error);
            throw error;            
        }
    }

    async getProblem(id) {
        try {
            const problem = await Problem.findById(id);
            if(!problem) {
                throw new NotFound("Problem", id);
            }
            return problem;
        }
        
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id) {
        try {
           const deletedProblem = await Problem.findByIdAndDelete(id);
           return deletedProblem;

        }

        catch(error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id,problemData) {

        try {
            console.log(problemData)
            const updatedProblem = Problem.findByIdAndUpdate(id,problemData);
            console.log("problemData: ", problemData);
            console.log("updatedProblem: ", updatedProblem);
            return updatedProblem;
        }

        catch(error) {
            console.log(error);
            throw err
        }
        
    }
    


}

module.exports = ProblemRepository;