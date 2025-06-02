import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@/prisma/client.js';
import createHttpError from 'http-errors';
import ISkill from '@/@types/data/ISkill.js';

const prisma = new PrismaClient();

export const createSkill = async (
  req: Request<{}, {}, ISkill>,
  res: Response,
  next: NextFunction
) => {

  try {
    const newSkill = await prisma.skill.create({
      data: req.body,
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

  try {
    const skill = await prisma.skill.findUnique({
      where: { id },
    });

    if (!skill) {
      throw createHttpError(404, 'Compétence non trouvée');
    }

    const skillToUpdate = await prisma.skill.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id },
    });

    res.status(200).json(skillToUpdate);
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
