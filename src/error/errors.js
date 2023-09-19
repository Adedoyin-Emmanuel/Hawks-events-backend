/* eslint-disable max-classes-per-file */
const CustomError = require('./custom-errors');

class UnAuthorizedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

class NotFound extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

class AlreadyExist extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = {
  UnAuthorizedError, BadRequestError, NotFound, AlreadyExist,
};
