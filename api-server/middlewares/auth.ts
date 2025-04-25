import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { createHttpError } from '@/utils/httpError';

export interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  console.log('Headers reçus :', req.headers);
  if (!authHeader || !authHeader.startsWith('Bearer '))
    return next(createHttpError(401, 'Authentication token missing or invalid'));

  const token = authHeader.split(' ')[1];
  console.log('Token reçu :', token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    return next(error);
  }
};
