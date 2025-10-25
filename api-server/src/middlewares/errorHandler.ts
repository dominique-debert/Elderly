import { IErrorDetails } from "@/types";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: IErrorDetails,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err); // utile pour le debug en dev

  const status = err.status || 500;
  const message = err.message || "Une erreur est survenue sur le serveur";
  const details = err.details || undefined;

  res.status(status).json({
    message,
    details,
  });
};
