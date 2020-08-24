import { Request, Response, NextFunction } from "express";

import { CustomError } from "../errors/customError";


export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction) => {
    if (err instanceof CustomError) {
      return res.status(err.statusCode)
        .send({ errors: err.serializeErrors() });
    };

    // For an unexpected error (not pre-defined,) log the error and send a generic "bad request" response.
    console.error(err);
    res.status(400).send({
      errors: [
        {
          message: 'Something went wrong...'
        }
      ]
    });
};
