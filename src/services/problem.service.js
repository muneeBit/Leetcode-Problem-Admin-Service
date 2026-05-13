const { deleteProblem } = require("../controllers/problem.controller");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer")

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository
    }

    async createProblem(problemData) {
        try {
            // 1 . Sanitize the description
        problemData.description = sanitizeMarkdownContent(problemData.description);

        

        const problem =await this.problemRepository.createProblem(problemData);

       

        return problem;
        }

        catch(error){
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        }

        catch(error) {

             throw error;
        }
    }

    async getProblem(problemId) {
        try {
            const problem = await this.problemRepository.getProblem(problemId);
            return problem;
        }

        catch(error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(problemId) {
       try {
        const deletedProblem = await this.problemRepository.deleteProblem(problemId);
        return deletedProblem;
       }
       
       catch(error) {
        console.log(error);
        throw error;
       }
    }

    async updateProblem(problemId, problemData) {
        try {
            const updatedProblem = await this.problemRepository.updateProblem(problemId, problemData);
            return updatedProblem;
        }

        catch(error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;