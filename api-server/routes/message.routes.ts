import { Router } from 'express';
import {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage
} from '@/controllers/index.controller';

import {
  messageSchema,
  idParamMessageSchema
} from '@/schemas/validation/message.schema';

import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Gestion des messages
 */

/**
 * @swagger
 * /api/messages:
 *   post:
 *     summary: Créer un nouveau message
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Message créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(messageSchema), errorHandler, createMessage);

/**
 * @swagger
 * /api/messages:
 *   get:
 *     summary: Récupérer tous les messages
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: Liste des messages récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 messages:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Message'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllMessages);

/**
 * @swagger
 * /api/messages/{id}:
 *   get:
 *     summary: Récupérer un message par ID
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Message trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       404:
 *         description: Message non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamMessageSchema, 'params'), errorHandler, getMessageById);

/**
 * @swagger
 * /api/messages/{id}:
 *   put:
 *     summary: Mettre à jour un message
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du message
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Message mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamMessageSchema, 'params'), errorHandler, updateMessage);

/**
 * @swagger
 * /api/messages/{id}:
 *   delete:
 *     summary: Supprimer un message
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du message
 *     responses:
 *       200:
 *         description: Message supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamMessageSchema, 'params'), errorHandler, deleteMessage);

export default router;
