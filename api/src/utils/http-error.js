// Throw one of these from a route handler and the error handler turns it into a JSON response.
export class HttpError extends Error {
  constructor(status, message, details) {
    super(message);
    this.status = status;
    this.details = details;
  }
};
