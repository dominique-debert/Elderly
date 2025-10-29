import { Router } from 'express';
import { createUserActivity, getAllUserActivities, getUserActivityById, updateUserActivity, deleteUserActivity } from '@/controllers/index.controller';
import { userActivitySchema, idParamUserActivitySchema } from '../validators/userActivity.validator';
import { validate } from '@/middlewares/validate';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: User Activities
 *   description: Gestion des activités utilisateurs
 */
/**
 * @swagger
 * /api/user-activities:
 *   post:
 *     summary: Créer une nouvelle activité utilisateur
 *     tags: [User Activities]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Activité utilisateur créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserActivity'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(userActivitySchema), createUserActivity);
/**
 * @swagger
 * /api/user-activities:
 *   get:
 *     summary: Récupérer toutes les activités utilisateurs
 *     tags: [User Activities]
 *     responses:
 *       200:
 *         description: Liste des activités utilisateurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userActivities:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UserActivity'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllUserActivities);
/**
 * @swagger
 * /api/user-activities/{id}:
 *   get:
 *     summary: Récupérer une activité utilisateur par ID
 *     tags: [User Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité utilisateur
 *     responses:
 *       200:
 *         description: Activité utilisateur trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserActivity'
 *       404:
 *         description: Activité utilisateur non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamUserActivitySchema, 'params'), getUserActivityById);
/**
 * @swagger
 * /api/user-activities/{id}:
 *   put:
 *     summary: Mettre à jour une activité utilisateur
 *     tags: [User Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'activité utilisateur
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Activité utilisateur mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserActivity'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamUserActivitySchema, 'params'), updateUserActivity);
/**
 * @swagger
 * /api/user-activities/{id}:
 *   delete:
 *     summary: Supprimer une activité utilisateur
 *     tags: [User Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'activité utilisateur
 *     responses:
 *       200:
 *         description: Activité utilisateur supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamUserActivitySchema, 'params'), deleteUserActivity);
export default router;
