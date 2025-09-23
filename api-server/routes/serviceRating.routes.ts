import { Router } from 'express';
import {
  createServiceRating,
  getAllServiceRating,
  getServiceRatingById,
  updateServiceRating,
  deleteServiceRating
} from '@/controllers/index.controller';

import { serviceRatingSchema, idParamServiceRatingSchema } from '../validators/serviceRating.validator';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Service Rating
 *   description: Gestion des évaluations de services
 */

/**
 * @swagger
 * /api/service-rating:
 *   post:
 *     summary: Créer une nouvelle évaluation de service
 *     tags: [Service Rating]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Évaluation de service créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceRating'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(serviceRatingSchema), createServiceRating);

/**
 * @swagger
 * /api/service-rating:
 *   get:
 *     summary: Récupérer toutes les évaluations de services
 *     tags: [Service Rating]
 *     responses:
 *       200:
 *         description: Liste des évaluations de services récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 serviceRating:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ServiceRating'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllServiceRating);

/**
 * @swagger
 * /api/service-rating/{id}:
 *   get:
 *     summary: Récupérer une évaluation de service par ID
 *     tags: [Service Completed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de l'évaluation de service
 *     responses:
 *       200:
 *         description: Évaluation de service trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceRating'
 *       404:
 *         description: Évaluation de service non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamServiceRatingSchema, 'params'), getServiceRatingById);

/**
 * @swagger
 * /api/service-rating/{id}:
 *   put:
 *     summary: Mettre à jour une évaluation de service
 *     tags: [Service Completed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'évaluation de service
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Service terminé mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiceRating'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamServiceRatingSchema, 'params'), updateServiceRating);

/**
 * @swagger
 * /api/service-rating/{id}:
 *   delete:
 *     summary: Supprimer une évaluation de service
 *     tags: [Service Completed]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'évaluation de service
 *     responses:
 *       200:
 *         description: Service terminé supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamServiceRatingSchema, 'params'), deleteServiceRating);

export default router;
