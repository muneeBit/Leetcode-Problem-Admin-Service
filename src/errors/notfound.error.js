const { BaseError } = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFound extends BaseError {
    constructor(resourceName, resourceValue) {
        super("Not Fouund",StatusCodes.NOT_FOUND,`The required resource: ${resourceName} with value: ${resourceValue} not found `, {
            resourceName,
            resourceValue
        });
    }
}

module.exports = NotFound;