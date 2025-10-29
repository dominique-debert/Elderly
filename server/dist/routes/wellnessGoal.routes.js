import { Router } from 'express';
import { createWellnessGoal, getAllWellnessGoals, getWellnessGoalById, updateWellnessGoal, deleteWellnessGoal } from '@/controllers/index.controller';
import { wellnessGoalSchema, idParamWellnessGoalSchema } from '../validators/wellnessGoal.validator';
import { validate } from '@/middlewares/validate';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Wellness Goals
 *   description: Gestion des objectifs bien-être
 */
/**
 * @swagger
 * /api/wellness-goals:
 *   post:
 *     summary: Créer un nouvel objectif bien-être
 *     tags: [Wellness Goals]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Objectif bien-être créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WellnessGoal'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(wellnessGoalSchema), createWellnessGoal);
/**
 * @swagger
 * /api/wellness-goals:
 *   get:
 *     summary: Récupérer tous les objectifs bien-être
 *     tags: [Wellness Goals]
 *     responses:
 *       200:
 *         description: Liste des objectifs bien-être récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wellnessGoals:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/WellnessGoal'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllWellnessGoals);
/**
 * @swagger
 * /api/wellness-goals/{id}:
 *   get:
 *     summary: Récupérer un objectif bien-être par ID
 *     tags: [Wellness Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'objectif bien-être
 *     responses:
 *       200:
 *         description: Objectif bien-être trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WellnessGoal'
 *       404:
 *         description: Objectif bien-être non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamWellnessGoalSchema, 'params'), getWellnessGoalById);
/**
 * @swagger
 * /api/wellness-goals/{id}:
 *   put:
 *     summary: Mettre à jour un objectif bien-être
 *     tags: [Wellness Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'objectif bien-être
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Objectif bien-être mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WellnessGoal'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamWellnessGoalSchema, 'params'), updateWellnessGoal);
/**
 * @swagger
 * /api/wellness-goals/{id}:
 *   delete:
 *     summary: Supprimer un objectif bien-être
 *     tags: [Wellness Goals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'objectif bien-être
 *     responses:
 *       200:
 *         description: Objectif bien-être supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamWellnessGoalSchema, 'params'), deleteWellnessGoal);
export default router;
