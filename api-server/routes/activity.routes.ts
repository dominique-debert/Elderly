import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import { activitySchema, idParamActivitySchema, activityWithCategorySchema } from '@/schemas/validation/activity.schema';
import errorHandler from '@/middlewares/errorHandler';

import {
  createActivity,
  getAllActivities,
  getActivityById,
  getActivityWithCategory,
  getActivityWithRegistration,
  updateActivity,
  deleteActivity
} from '@/controllers/activities/activity.controller';

const router = Router();

/**
 * @swagger
 * /api/activities:
 *   post:
 *     summary: Créer une nouvelle activité
 *     description: Crée une nouvelle activité avec les données fournies
 *     security:
 *       - bearerAuth: []
 *     tags: [Activities]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: activité créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       400:
 *         description: Requête invalide ou activité déjà existante
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(activitySchema), errorHandler, createActivity);

/**
 * @swagger
 * /api/activities:
 *   get:
 *     summary: Récupérer toutes les activités
 *     description: Renvoie une liste d'activités
 *     security:
 *       - bearerAuth: []
 *     tags: [Activities]
 *     responses:
 *       200:
 *         description: Liste des activités récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 activities:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Activity'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllActivities);

/**
 * @swagger
 * /api/activities/{id}:
 *   get:
 *     summary: Récupérer une activité par son ID
 *     description: Renvoie une activité basée sur son ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité à récupérer
 *     responses:
 *       200:
 *         description: Activité récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       404:
 *         description: Activité non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamActivitySchema, 'params'), errorHandler, getActivityById);

/**
 * @swagger
 * /api/activities/{id}:
 *   get:
 *     summary: Récupérer une activité et sa catégorie par son ID
 *     description: Renvoie une activité basée sur son ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité à récupérer
 *     responses:
 *       200:
 *         description: Activité récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActivityWithCategory'
 *       404:
 *         description: Activité non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id/with-category', validate(idParamActivitySchema, 'params'), errorHandler, getActivityWithCategory);
/**
 * @swagger
 * /api/activities/{id}:
 *   get:
 *     summary: Récupérer une activité et sa catégorie par son ID
 *     description: Renvoie une activité basée sur son ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité à récupérer
 *     responses:
 *       200:
 *         description: Activité récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActivityWithCategory'
 *       404:
 *         description: Activité non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id/with-registration', validate(idParamActivitySchema, 'params'), errorHandler, getActivityWithRegistration);

/**
 * @swagger
 * /api/activities/{id}:
 *   put:
 *     summary: Mettre à jour une activité
 *     description: Met à jour une activité existante avec les données fournies
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité à mettre à jour
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Activité mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       404:
 *         description: Activité non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamActivitySchema, 'params'), errorHandler, updateActivity);

/**
 * @swagger
 * /api/activities/{id}:
 *   delete:
 *     summary: Supprimer une activité
 *     description: Supprime une activité existante
 *     tags: [Activities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'activité à supprimer
 *     responses:
 *       200:
 *         description: Activité supprimée avec succès
 *       404:
 *         description: Activité non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamActivitySchema, 'params'), errorHandler, deleteActivity);

export default router;
