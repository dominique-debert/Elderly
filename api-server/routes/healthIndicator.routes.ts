import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import errorHandler from '@/middlewares/errorHandler';

import {
  healthIndicatorSchema,
  idParamHealthIndicatorSchema
} from '@/schemas/validation/healthIndicator.schema';

import {
  createHealthIndicator,
  getAllHealthIndicators,
  getHealthIndicatorById,
  updateHealthIndicator,
  deleteHealthIndicator
} from '@/controllers/index.controller';

const router = Router();

/**
 * @swagger
 * /api/health-indicators:
 *   post:
 *     summary: Crée un nouveau indicateur de santé
 *     tags: [Health Indicators]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HealthIndicator'
 *     responses:
 *       201:
 *         description: Indicateur créé
 */
router.post(
  '/',
  validate(healthIndicatorSchema),
  errorHandler,
  createHealthIndicator
);

/**
 * @swagger
 * /api/health-indicators:
 *   get:
 *     summary: Récupère la liste de tous les indicateurs de santé
 *     tags: [Health Indicators]
 *     responses:
 *       200:
 *         description: Liste des indicateurs de santé
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HealthIndicator'
 */
router.get(
  '/',
  errorHandler,
  getAllHealthIndicators
);

/**
 * @swagger
 * /api/health-indicators/{id}:
 *   get:
 *     summary: Récupère un indicateur de santé par son ID
 *     tags: [Health Indicators]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'indicateur à récupérer
 *     responses:
 *       200:
 *         description: Indicateur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthIndicator'
 *       404:
 *         description: Indicateur non trouvé
 */
router.get(
  '/:id',
  validate(idParamHealthIndicatorSchema, 'params'),
  getHealthIndicatorById
);

/**
 * @swagger
 * /api/health-indicators/{id}:
 *   put:
 *     summary: Met à jour un indicateur de santé
 *     tags: [Health Indicators]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'indicateur à mettre à jour
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HealthIndicator'
 *     responses:
 *       200:
 *         description: Indicateur mise à jour
 *       404:
 *         description: Indicateur non trouvé
 */
router.put(
  '/:id',
  validate(idParamHealthIndicatorSchema, 'params'),
  errorHandler,
  updateHealthIndicator
);

/**
 * @swagger
 * /api/health-indicators/{id}:
 *   delete:
 *     summary: Supprime un indicateur de santé
 *     tags: [Health Indicators]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'indicateur à supprimer
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 *       404:
 *         description: Indicateur non trouvé
 */
router.delete(
  '/:id',
  validate(idParamHealthIndicatorSchema, 'params'),
  errorHandler,
  deleteHealthIndicator
);

export default router;