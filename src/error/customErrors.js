class customError extends Error{
    constructor(message){
        super(message);
        this.statusCode;
        this.status = this.statusCode>=400&&this.statusCode<500?"fail":"error";
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = customError;