import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import errorHandler from '@/middlewares/errorHandler';
import { 
  createActivity,
  getAllActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
} from '@/controllers/index.controller';

import { 
  activitySchema,
  idParamActivitySchema 
} from '@/schemas/validation/activity.schema';

const router = Router();

router.post('/', validate(activitySchema), errorHandler, createActivity);
router.get('/', errorHandler, getAllActivities);
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
