// routes/badgeRoutes.ts
import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import { badgeSchema, idParamSchema } from '../validators/badge.validator';

import {
  createBadge,
  getAllBadges,
  getBadgeById,
  updateBadge,
  deleteBadge
} from '@/controllers/index.controller';

const router = Router();

/**
 * @swagger
 * /api/badges:
 *   post:
 *     summary: Créer un nouveau badge
 *     description: Crée un nouveau badge avec les données fournies
 *     tags: [Badges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom du badge
 *               description:
 *                 type: string
 *                 description: Description du badge
 *               icon:
 *                 type: string
 *                 description: Chemin de l'icône du badge
 *               category:
 *                 type: string
 *                 description: Catégorie du badge
 *               level:
 *                 type: integer
 *                 description: Niveau du badge
 *     responses:
 *       201:
 *         description: Badge créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Badge'
 *       400:
 *         description: Requête invalide ou badge déjà existant
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(badgeSchema), createBadge);

/**
 * @swagger
 * /api/badges:
 *   get:
 *     summary: Récupérer tous les badges
 *     description: Renvoie une liste de badges
 *     tags: [Badges]
 *     responses:
 *       200:
 *         description: Liste des badges récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 badges:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Badge'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllBadges);

/**
 * @swagger
 * /api/badges/{id}:
 *   get:
 *     summary: Récupérer un badge par son ID
 *     description: Renvoie un badge basé sur son ID
 *     tags: [Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du badge à récupérer
 *     responses:
 *       200:
 *         description: Badge récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Badge'
 *       404:
 *         description: Badge non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamSchema, 'params'), getBadgeById);

/**
 * @swagger
 * /api/badges/{id}:
 *   put:
 *     summary: Mettre à jour un badge
 *     description: Met à jour un badge existant avec les données fournies
 *     tags: [Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du badge à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom du badge
 *               description:
 *                 type: string
 *                 description: Description du badge
 *               icon:
 *                 type: string
 *                 description: Chemin de l'icône du badge
 *               category:
 *                 type: string
 *                 description: Catégorie du badge
 *               level:
 *                 type: integer
 *                 description: Niveau du badge
 *     responses:
 *       200:
 *         description: Badge mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Badge'
 *       404:
 *         description: Badge non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamSchema, 'params'), updateBadge);

/**
 * @swagger
 * /api/badges/{id}:
 *   delete:
 *     summary: Supprimer un badge
 *     description: Supprime un badge existant
 *     tags: [Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du badge à supprimer
 *     responses:
 *       200:
 *         description: Badge supprimé avec succès
 *       404:
 *         description: Badge non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamSchema, 'params'), deleteBadge);

export default router;
