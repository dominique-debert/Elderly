import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../prisma/client.js';
import createHttpError from 'http-errors';
import ISkill from '@/@types/ISkill.js';

const prisma = new PrismaClient();

export const createSkill = async (
  req: Request<{}, {}, ISkill>,
  res: Response,
  next: NextFunction
) => {
  const { name, category, description } = req.body;

  try {
    const newSkill = await prisma.skill.create({
      data: {
        name,
        category,
        description,
      },
    });

    res.status(201).json(newSkill);
  } catch (error) {
    next(error);
  }
};

export const getAllSkills = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    res.status(200).json({ skills });
  } catch (error) {
    next(error);
  }
};

export const getSkillById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const skill = await prisma.skill.findUnique({
      where: { id }
    });

    if (!skill) {
      throw createHttpError(404, 'Compétence non trouvée');
    }

    res.status(200).json(skill);
  } catch (error) {
    next(error);
  }
};

export const updateSkill = async (
  req: Request<{ id: string }, {}, ISkill>,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const { name, category, description } = req.body;

  try {
    const skill = await prisma.skill.findUnique({
      where: { id },
    });

    if (!skill) {
      throw createHttpError(404, 'Compétence non trouvée');
    }

    const updatedSkill = await prisma.skill.update({
      where: { id },
      data: {
        name,
        category,
        description,
      },
    });

    res.status(200).json(updatedSkill);
  } catch (error) {
    next(error);
  }
};

export const deleteSkill = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const skill = await prisma.skill.findUnique({
      where: { id }
    });

    if (!skill) {
      throw createHttpError(404, 'Compétence non trouvée');
    }

    await prisma.skill.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Compétence supprimée avec succès' });
  } catch (error) {
    next(error);
  }
};
