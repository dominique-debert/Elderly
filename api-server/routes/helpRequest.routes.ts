import { Router } from 'express';
import {
  createHelpRequest,
  getAllHelpRequests,
  getHelpRequestById,
  updateHelpRequest,
  deleteHelpRequest
} from '@/controllers/index.controller';

import {
  helpRequestSchema,
  idParamHelpRequestSchema
} from '../validators/helpRequest.validator';

import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Help Requests
 *   description: Gestion des demandes d'aide
 */

/**
 * @swagger
 * /api/help-requests:
 *   post:
 *     summary: Créer une nouvelle demande d'aide
 *     tags: [Help Requests]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Demande créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(helpRequestSchema), createHelpRequest);

/**
 * @swagger
 * /api/help-requests:
 *   get:
 *     summary: Récupérer toutes les demandes d'aide
 *     tags: [Help Requests]
 *     responses:
 *       200:
 *         description: Liste des demandes récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 helpRequests:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/HelpRequest'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllHelpRequests);

/**
 * @swagger
 * /api/help-requests/{id}:
 *   get:
 *     summary: Récupérer une demande par ID
 *     tags: [Help Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la demande d'aide
 *     responses:
 *       200:
 *         description: Demande trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *       404:
 *         description: Demande non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamHelpRequestSchema, 'params'), getHelpRequestById);

/**
 * @swagger
 * /api/help-requests/{id}:
 *   put:
 *     summary: Mettre à jour une demande
 *     tags: [Help Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la demande
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Demande mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpRequest'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamHelpRequestSchema, 'params'), updateHelpRequest);

/**
 * @swagger
 * /api/help-requests/{id}:
 *   delete:
 *     summary: Supprimer une demande
 *     tags: [Help Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la demande d'aide
 *     responses:
 *       200:
 *         description: Demande supprimée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamHelpRequestSchema, 'params'), deleteHelpRequest);

export default router;
