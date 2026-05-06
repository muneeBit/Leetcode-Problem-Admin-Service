const { BaseError } =  require ("./base.error")

const { StatusCodes } = require("http-status-codes")

class InternalServerError extends BaseError {

    constructor(details) {
        super("Internal Server Error", StatusCodes.InternalServerError, "something went wrong !!", details)
    }

}

module.exports = InternalServerError;