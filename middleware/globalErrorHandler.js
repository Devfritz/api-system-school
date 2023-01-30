const globalErrorHandler = (err, req, res, next) => {
  err.stack = err.stack;
  err.status = err.status ? err.status : "fail";
  err.message = err.message;
  err.statusCode = err.statusCode ? err.statusCode : 500;

  res.status(err.statusCode).json({
    isSuccess: err.status,
    message: err.message,
    stack: err.stack,
  });
};

//  Not Found
const notFound = (req, res, next) => {
  const err = `Ressource ${req.originalUrl} is not found on the server`;
  next(err);
};

module.exports = { globalErrorHandler, notFound };
