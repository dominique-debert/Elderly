import { Router } from 'express';
import {
  createUrbanIssueReport,
  getAllUrbanIssueReports,
  getUrbanIssueReportById,
  updateUrbanIssueReport,
  deleteUrbanIssueReport
} from '@/controllers/index.controller';

import { urbanIssueReportSchema, idParamUrbanIssueReportSchema } from '../validators/urbanIssueReport.validator';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Urban Issue Reports
 *   description: Gestion des rapports de problèmes urbains
 */

/**
 * @swagger
 * /api/urban-issue-reports:
 *   post:
 *     summary: Créer un nouveau rapport de problème urbain
 *     tags: [Urban Issue Reports]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Rapport de problème urbain créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UrbanIssueReport'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(urbanIssueReportSchema), errorHandler, createUrbanIssueReport);

/**
 * @swagger
 * /api/urban-issue-reports:
 *   get:
 *     summary: Récupérer tous les rapports de problèmes urbains
 *     tags: [Urban Issue Reports]
 *     responses:
 *       200:
 *         description: Liste des rapports de problèmes urbains récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 urbanIssueReports:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UrbanIssueReport'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllUrbanIssueReports);

/**
 * @swagger
 * /api/urban-issue-reports/{id}:
 *   get:
 *     summary: Récupérer un rapport de problème urbain par ID
 *     tags: [Urban Issue Report]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du rapport de problème urbain
 *     responses:
 *       200:
 *         description: Rapport de problème urbain trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UrbanIssueReport'
 *       404:
 *         description: Rapport de problème urbain non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamUrbanIssueReportSchema, 'params'), errorHandler, getUrbanIssueReportById);

/**
 * @swagger
 * /api/trusted-contacts/{id}:
 *   put:
 *     summary: Mettre à jour un Rapport de problème urbain
 *     tags: [Urban Issue Report]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du Rapport de problème urbain
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Rapport de problème urbain mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UrbanIssueReport'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamUrbanIssueReportSchema, 'params'), errorHandler, updateUrbanIssueReport);

/**
 * @swagger
 * /api/urban-issue-reports/{id}:
 *   delete:
 *     summary: Supprimer un Rapport de problème urbain
 *     tags: [Urban Issue Report]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du Rapport de problème urbain
 *     responses:
 *       200:
 *         description: Rapport de problème urbain supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamUrbanIssueReportSchema, 'params'), errorHandler, deleteUrbanIssueReport);

export default router;
