import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import errorHandler from '@/middlewares/errorHandler';

import {
  wellnessBadgeSchema,
  idParamWellnessBadgeSchema 
} from '@/schemas/validators/wellnessBadge.schema';

import {
  createWellnessBadge,
  getAllWellnessBadges,
  getWellnessBadgeById,
  updateWellnessBadge,
  deleteWellnessBadge,
} from '@/controllers/index.controller';

const router = Router();

/**
 * @swagger
 * /api/wellness-badges:
 *   post:
 *     summary: Crée un nouveau badge
 *     tags: [Wellness Badges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WellnessBadge'
 *     responses:
 *       201:
 *         description: Badge créé
 */
router.post('/', validate(wellnessBadgeSchema), errorHandler, createWellnessBadge);

/**
 * @swagger
 * /api/wellness-badges:
 *   get:
 *     summary: Liste tous les badges bien-être
 *     tags: [Wellness Badges]
 *     responses:
 *       200:
 *         description: Liste des badges
 */
router.get('/', errorHandler, getAllWellnessBadges);

/**
 * @swagger
 * /api/wellness-badges/{id}:
 *   get:
 *     summary: Récupère un badge par son ID
 *     tags: [Wellness Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *     responses:
 *       200:
 *         description: Badge trouvé
 *       404:
 *         description: Badge introuvable
 */
router.get('/:id', validate(idParamWellnessBadgeSchema, 'params'), errorHandler, getWellnessBadgeById);

/**
 * @swagger
 * /api/wellness-badges/{id}:
 *   put:
 *     summary: Met à jour un badge
 *     tags: [Wellness Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WellnessBadge'
 *     responses:
 *       200:
 *         description: Badge mis à jour
 *       404:
 *         description: Badge introuvable
 */
router.put('/:id', validate(idParamWellnessBadgeSchema, 'params'), errorHandler, updateWellnessBadge);

/**
 * @swagger
 * /api/wellness-badges/{id}:
 *   delete:
 *     summary: Supprime un badge
 *     tags: [Wellness Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *     responses:
 *       204:
 *         description: Suppression réussie
 *       404:
 *         description: Badge introuvable
 */
router.delete('/:id', validate(idParamWellnessBadgeSchema, 'params'), errorHandler, deleteWellnessBadge);

export default router;
