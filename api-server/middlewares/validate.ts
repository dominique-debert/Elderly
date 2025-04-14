import { Request, Response, NextFunction, RequestHandler } from 'express';

export const validate = (schema: any, property: string = 'body'): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate((req as any)[property]);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
    } else {
      next();
    }
  };
};