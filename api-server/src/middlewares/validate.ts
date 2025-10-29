import { Request, Response, NextFunction, RequestHandler } from "express";
import Joi from "joi";

export const validate = (
  schema: Joi.ObjectSchema,
  property: "body" | "params" | "query" = "body"
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[property]);

    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    req[property] = value;

    next();
  };
};
