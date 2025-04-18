import { NextFunction, Request, Response } from 'express';
import argon2 from 'argon2';
import {PrismaClient} from '@/prisma/client';
import { generateToken } from '@/utils/jwt';
import { createHttpError } from '@/utils/httpError';

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validation des données d'entrée
    const { email, password, firstName, lastName } = req.body;
    
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) throw createHttpError(409, 'Email déjà utilisé');
    
    const passwordHash = await argon2.hash(password);
    
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName
      }
    });
    
    const token = generateToken({ userId: user.id });
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  };
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw createHttpError(404, 'Utilisateur inconnu');
    
    const valid = await argon2.verify(user.passwordHash, password);
    if (!valid) throw createHttpError(401, 'Accès refusé');
    
    const token = generateToken({ userId: user.id });
    res.json({ token });
  }
  catch (error) {
    next(error);
  }
};

export const logout = async (_req: Request, res: Response) => {
  // Le logout côté JWT est généralement géré côté client (en supprimant le token).
  // Optionnellement, tu peux implémenter une blacklist côté serveur.
  res.json({ message: 'Logged out successfully' });
  
};
