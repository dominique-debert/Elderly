import { Request, Response, NextFunction } from 'express';
import { createHttpError } from '@/utils/httpError.js';
import { PrismaClient } from '@/prisma/client.js';
import IUrbanIssueReport from '@/@types/data/IUrbanIssueReport';

const prisma = new PrismaClient();

/**
 * @swagger
 * tags:
 *   name: Urban Issue Reports
 *   description: Gestion des rapports de problèmes urbains
 */
export const createUrbanIssueReport = async (
  req: Request<{}, {}, IUrbanIssueReport>,
  res: Response,
  next: NextFunction
) => {

  try {
    const urbanIssueReport = await prisma.urbanIssueReport.create({
      data: {
        ...req.body
      }
    });
    res.status(201).json(urbanIssueReport);
  } catch (error) {
    next(error);
  }
};

export const getAllUrbanIssueReports = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const urbanIssueReports = await prisma.urbanIssueReport.findMany({
      orderBy: {
        reportDate: 'desc'
      }
    });
    res.status(200).json({ urbanIssueReports });
  } catch (error) {
    next(error);
  }
};

export const getUrbanIssueReportById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const urbanIssueReport = await prisma.urbanIssueReport.findUnique({
      where: { id }
    });

    if (!urbanIssueReport) {
      throw createHttpError(404, 'Rapport de problème urbain non trouvé');
    }

    res.status(200).json(urbanIssueReport);
  } catch (error) {
    next(error);
  }
};

export const updateUrbanIssueReport = async (
  req: Request<{ id: string }, {}, IUrbanIssueReport>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const urbanIssueReport = await prisma.urbanIssueReport.findUnique({
      where: { id }
    });

    if (!urbanIssueReport) {
      throw createHttpError(404, 'Rapport de problème urbain non trouvé');
    }

    const updatedUrbanIssueReport = await prisma.urbanIssueReport.update({
      data: {
        ...req.body,
        updatedAt: new Date()
      },
      where: { id }
    });

    res.status(200).json(updatedUrbanIssueReport);
  } catch (error) {
    next(error);
  }
};

export const deleteUrbanIssueReport = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const urbanIssueReport = await prisma.urbanIssueReport.findUnique({
      where: { id }
    });

    if (!urbanIssueReport) {
      throw createHttpError(404, 'Rapport de problème urbain non trouvé');
    }

    await prisma.urbanIssueReport.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Rapport de problème urbain supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};
