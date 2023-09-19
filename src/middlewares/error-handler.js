/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
    const CustomMessage = {
      message: err.message || 'Internal Serval Error',
      statusCode: err.statusCode || 500,
    };
    res.status(CustomMessage.statusCode).json({ message: CustomMessage.message });
  };
  
  module.exports = errorHandler;
  