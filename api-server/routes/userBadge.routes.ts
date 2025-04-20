import { Router } from 'express';
import {
  createUserBadge,
  getAllUserBadges,
  getUserBadgeById,
  updateUserBadge,
  deleteUserBadge
} from '@/controllers/userBadge.controller';

import { userBadgeSchema, idParamUserBadgeSchema } from '@/schemas/validation/userBadge.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Badges
 *   description: Gestion des badges utilisateurs
 */

/**
 * @swagger
 * /api/user-badges:
 *   post:
 *     summary: Créer un nouveau badge utilisateur
 *     tags: [User Badges]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Badge utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserBadge'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(userBadgeSchema), errorHandler, createUserBadge);

/**
 * @swagger
 * /api/user-badges:
 *   get:
 *     summary: Récupérer tous les badges utilisateurs
 *     tags: [User Badges]
 *     responses:
 *       200:
 *         description: Liste des badges utilisateurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userBadges:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UserBadge'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllUserBadges);

/**
 * @swagger
 * /api/user-badges/{id}:
 *   get:
 *     summary: Récupérer un badge utilisateur par ID
 *     tags: [User Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du badge utilisateur
 *     responses:
 *       200:
 *         description: Badge utilisateur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserBadge'
 *       404:
 *         description: Badge utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamUserBadgeSchema, 'params'), errorHandler, getUserBadgeById);

/**
 * @swagger
 * /api/user-badges/{id}:
 *   put:
 *     summary: Mettre à jour un badge utilisateur
 *     tags: [User Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du badge utilisateur
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Badge utilisateur mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserBadge'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamUserBadgeSchema, 'params'), errorHandler, updateUserBadge);

/**
 * @swagger
 * /api/user-badges/{id}:
 *   delete:
 *     summary: Supprimer un badge utilisateur
 *     tags: [User Badges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du badge utilisateur
 *     responses:
 *       200:
 *         description: Badge utilisateur supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamUserBadgeSchema, 'params'), errorHandler, deleteUserBadge);

export default router;
