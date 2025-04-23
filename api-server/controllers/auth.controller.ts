import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '../prisma/client';
import argon2 from 'argon2';
import { createHttpError } from '@/utils/httpError';
import { generateToken } from '@/utils/jwt';
import { signUpSchema, signInSchema } from '@/schemas/validation/auth.schema';

const prisma = new PrismaClient();

const accessTokenExpiry = process.env.JWT_EXPIRES_IN || '15m';
const refreshTokenExpiryDays = parseInt((process.env.REFRESH_TOKEN_EXPIRES_IN || '7d').replace(/\D/g, '')) || 7;

const signToken = (userId: string, type: 'access' | 'refresh') => {
  try {
    const expiresIn = type === 'access' ? accessTokenExpiry : `${refreshTokenExpiryDays}d`;
    return generateToken({ userId }, expiresIn);
  } catch (error) {
    console.error(`Error generating ${type} token:`, error);
    throw new Error(`Failed to generate ${type} token`);
  }
};

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = signUpSchema.validate(req.body);
    if (error) throw createHttpError(400, 'Invalid data', error.details);

    const { email, password, firstName, lastName, avatar, birthDate, isAdmin } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw createHttpError(409, 'Email already in use');

    const passwordHash = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName,
        avatar,
        birthDate,
        isAdmin,
      },
    });

    const accessToken = signToken(user.id, 'access');
    const refreshToken = signToken(user.id, 'refresh');

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + refreshTokenExpiryDays);

    await prisma.session.create({
      data: {
        refreshToken,
        userId: user.id,
        expiresAt,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
      },
    });

    res.status(201).json({
      accessToken,
      refreshToken,
      expiresIn: accessTokenExpiry,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        birthDate: user.birthDate,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = signInSchema.validate(req.body);
    if (error) throw createHttpError(400, 'Invalid data', error.details);
    
    const { email, password } = req.body;
    
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await argon2.verify(user.passwordHash, password))) {
      throw createHttpError(401, 'Invalid credentials');
    }
    
    const accessToken = signToken(user.id, 'access');
    const refreshToken = signToken(user.id, 'refresh');
    
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + refreshTokenExpiryDays);
    
    await prisma.session.create({
      data: {
        refreshToken,
        userId: user.id,
        expiresAt,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
      },
    });

    // Retourner les informations du profil avec les tokens
    res.json({
      accessToken,
      refreshToken,
      expiresIn: accessTokenExpiry,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
      birthDate: user.birthDate,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    next(error);
  }
};


export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw createHttpError(400, 'Refresh token required');
    
    await prisma.session.deleteMany({ where: { refreshToken } });
    
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};