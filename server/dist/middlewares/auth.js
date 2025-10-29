import jwt from 'jsonwebtoken';
import { createHttpError } from '@/utils/httpError';
export const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer '))
        return next(createHttpError(401, 'Authentication token missing or invalid'));
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userId: decoded.userId };
        next();
    }
    catch (error) {
        return next(error);
    }
};
