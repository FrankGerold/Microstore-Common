import { CustomError } from "./customError";

export class DatabaseConnectionError extends CustomError {
  reason = 'Error connecting to database!';
  statusCode = 500;

  constructor() {
    super('Problem connecting to DB');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ]
  }
}
