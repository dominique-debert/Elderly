import express from 'express';
import {
  getAllBadges,
  getBadgeById,
  createBadge,
  updateBadge,
  deleteBadge,
} from '../controllers/wellnessBadge.controller.js';

const wellnessBadgeRoutes = express.Router();

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
wellnessBadgeRoutes.get('/', getAllBadges);

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
 *           type: integer
 *     responses:
 *       200:
 *         description: Badge trouvé
 *       404:
 *         description: Badge introuvable
 */
wellnessBadgeRoutes.get('/:id', getBadgeById);

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
wellnessBadgeRoutes.post('/', createBadge);

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
 *           type: integer
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
wellnessBadgeRoutes.put('/:id', updateBadge);

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
 *           type: integer
 *     responses:
 *       204:
 *         description: Suppression réussie
 *       404:
 *         description: Badge introuvable
 */
wellnessBadgeRoutes.delete('/:id', deleteBadge);

export default wellnessBadgeRoutes;
