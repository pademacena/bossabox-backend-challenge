import { Request, Response, NextFunction } from 'express';

class ErrorConstructor extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function errorHandling(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ErrorConstructor) {
    return res.status(err.statusCode).json({
      error: err.message
    });
  }

  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}