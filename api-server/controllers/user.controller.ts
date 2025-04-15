import { PrismaClient } from "../prisma/client";
import { Request, Response, NextFunction } from "express";
import { createHttpError } from "@/utils/httpError";
import IUser from '@/@types/data/IUser'

const prisma = new PrismaClient();

// Créer un nouvel utilisateur
export const createUser = async (
  req: Request<{}, {}, IUser>, res: Response, next: NextFunction) => {
  const {
    email,
    password_hash,
    first_name,
    last_name,
    birth_date,
    address,
    gps_coordinates,
    phone,
    profile_picture,
    registration_date,
    account_verified,
    interface_preferences,
    two_factor_authentication,
    help_points,
    reduced_mobility,
    activity_level,
    emergency_contact_name,
    emergency_contact_phone,
    status
  } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password_hash,
        first_name,
        last_name,
        birth_date,
        address,
        gps_coordinates,
        phone,
        profile_picture,
        registration_date,
        account_verified,
        interface_preferences,
        two_factor_authentication,
        help_points,
        reduced_mobility,
        activity_level,
        emergency_contact_name,
        emergency_contact_phone,
        status
      }
    })
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// Récupérer tous les utilisateurs avec pagination et filtres optionnels
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        last_name: 'asc',
        first_name: 'asc' // Ascending order (A-Z)
      },
    });

    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

// Récupérer un utilisateur par son ID
export const getUserById = async (
  req: Request<{ id: string }>, 
  res: Response, 
  next: NextFunction) => {
  
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un utilisateur
export const updateUser = async (req: Request<{ id: string }, {}, IUser>, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const {
    email,
    password_hash,
    first_name,
    last_name,
    birth_date,
    address,
    gps_coordinates,
    phone,
    profile_picture,
    registration_date,
    account_verified,
    interface_preferences,
    two_factor_authentication,
    help_points,
    reduced_mobility,
    activity_level,
    emergency_contact_name,
    emergency_contact_phone,
    status
  } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }

    const updatedUser = await prisma.user.update({
      data: {
        email,
        password_hash,
        first_name,
        last_name,
        birth_date,
        address,
        gps_coordinates,
        phone,
        profile_picture,
        registration_date,
        account_verified,
        interface_preferences,
        two_factor_authentication,
        help_points,
        reduced_mobility,
        activity_level,
        emergency_contact_name,
        emergency_contact_phone,
        status
      },
      where: { id },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw createHttpError(404, `Utilisateur non trouvé`);
    }
    await prisma.user.delete({
      where: { id }
    })
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};
