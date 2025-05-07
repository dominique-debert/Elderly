import { Router } from 'express';
import {
  createUserStatistics,
  getAllUserStatistics,
  getUserStatisticsById,
  updateUserStatistics,
  deleteUserStatistics
} from '@/controllers/index.controller';

import { userStatisticsSchema, idParamUserStatisticsSchema } from '../validators/userStatistics.validator';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Statistics
 *   description: Gestion des statistiques utilisateurs
 */

/**
 * @swagger
 * /api/user-statistics:
 *   post:
 *     summary: Créer une nouvelle statistique utilisateur
 *     tags: [User Statistics]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Statistique utilisateur créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserStatistics'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(userStatisticsSchema), errorHandler, createUserStatistics);

/**
 * @swagger
 * /api/user-statistics:
 *   get:
 *     summary: Récupérer toutes les statistiques utilisateurs
 *     tags: [User Statistics]
 *     responses:
 *       200:
 *         description: Liste des statistiques utilisateurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userStatistics:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UserStatistics'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllUserStatistics);

/**
 * @swagger
 * /api/user-statistics/{id}:
 *   get:
 *     summary: Récupérer une compétence utilisateur par ID
 *     tags: [User Statistics]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la compétence utilisateur
 *     responses:
 *       200:
 *         description: Compétence utilisateur trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserStatistics'
 *       404:
 *         description: Compétence utilisateur non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamUserStatisticsSchema, 'params'), errorHandler, getUserStatisticsById);

/**
 * @swagger
 * /api/user-skills/{id}:
 *   put:
 *     summary: Mettre à jour une compétence utilisateur
 *     tags: [User Statistics]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la compétence utilisateur
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Compétence utilisateur mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserStatistics'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamUserStatisticsSchema, 'params'), errorHandler, updateUserStatistics);

/**
 * @swagger
 * /api/user-skills/{id}:
 *   delete:
 *     summary: Supprimer une compétence utilisateur
 *     tags: [User Statistics]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la compétence utilisateur
 *     responses:
 *       200:
 *         description: Compétence utilisateur supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamUserStatisticsSchema, 'params'), errorHandler, deleteUserStatistics);

export default router;
