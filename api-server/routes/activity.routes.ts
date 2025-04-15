import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import { activitySchema, idParamActivitySchema } from '@/schemas/validation/activity.schema';
import errorHandler from '@/middlewares/errorHandler';

import {
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivity,
  deleteActivity
} from '@/controllers/activity.controller';

const router = Router();

/**
 * @swagger
 * /api/activities:
 *   post:
 *     summary: Créer une nouvelle activité
 *     description: Crée une nouvelle activité avec les données fournies
 *     tags: [Activities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Titre de l'activité
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
router.post('/', validate(activitySchema), errorHandler, createActivity);

/**
 * @swagger
 * /api/activities:
 *   get:
 *     summary: Récupérer toutes les activités
 *     tags: [Activities]
 *     responses:
 *       200:
 *         description: Liste des activités récupérées avec succès
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
 *         description: Activité récupéré avec succès
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
