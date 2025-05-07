import { Router } from 'express';
import {
  createTrustCircle,
  getAllTrustCircle,
  getTrustCircleById,
  updateTrustCircle,
  deleteTrustCircle
} from '@/controllers/index.controller';

import { trustCircleSchema, idParamTrustCircleSchema } from '@/schemas/validators/trustCircle.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Trust Circle
 *   description: Gestion des cercles de confiance
 */

/**
 * @swagger
 * /api/trust-circle:
 *   post:
 *     summary: Créer un nouveau cercle de confiance
 *     tags: [Trust Circle]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Cercle de confiance créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrustCircle'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(trustCircleSchema), errorHandler, createTrustCircle);

/**
 * @swagger
 * /api/trust-circle:
 *   get:
 *     summary: Récupérer tous les cercles de confiance
 *     tags: [Trust Circle]
 *     responses:
 *       200:
 *         description: Liste des cercles de confiance récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 trustCircle:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/TrustCircle'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllTrustCircle);

/**
 * @swagger
 * /api/trust-circle/{id}:
 *   get:
 *     summary: Récupérer un cercle de confiance par ID
 *     tags: [Trust Circle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du cercle de confiance
 *     responses:
 *       200:
 *         description: Cercle de confiance trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrustCircle'
 *       404:
 *         description: Cercle de confiance non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamTrustCircleSchema, 'params'), errorHandler, getTrustCircleById);

/**
 * @swagger
 * /api/trust-circle/{id}:
 *   put:
 *     summary: Mettre à jour un cercle de confiance
 *     tags: [Trust Circle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du cercle de confiance
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Cercle de confiance mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TrustCircle'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamTrustCircleSchema, 'params'), errorHandler, updateTrustCircle);

/**
 * @swagger
 * /api/trust-circle/{id}:
 *   delete:
 *     summary: Supprimer un cercle de confiance
 *     tags: [Trust Circle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du cercle de confiance
 *     responses:
 *       200:
 *         description: Cercle de confiance supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamTrustCircleSchema, 'params'), errorHandler, deleteTrustCircle);

export default router;
