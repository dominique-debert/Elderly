import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import errorHandler from '@/middlewares/errorHandler';

import {
  conversationSchema,
  idParamConversationSchema
} from '../validators/conversation.validator';

import {
  createConversation,
  getAllConversations,
  getConversationById,
  updateConversation,
  deleteConversation
} from '@/controllers/index.controller';

const router = Router();

/**
 * @swagger
 * /api/conversations:
 *   post:
 *     summary: Crée une nouvelle conversation
 *     tags: [Conversations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conversation'
 *     responses:
 *       201:
 *         description: Conversation créée
 */
router.post(
  '/',
  validate(conversationSchema),
  errorHandler,
  createConversation
);

/**
 * @swagger
 * /api/conversations:
 *   get:
 *     summary: Récupère la liste de toutes les conversations
 *     tags: [Conversations]
 *     responses:
 *       200:
 *         description: Liste des conversations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Conversation'
 */
router.get(
  '/',
  errorHandler,
  getAllConversations
);

/**
 * @swagger
 * /api/conversations/{id}:
 *   get:
 *     summary: Récupère une conversation par son ID
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la conversation à récupérer
 *     responses:
 *       200:
 *         description: Conversation trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conversation'
 *       404:
 *         description: Conversation non trouvée
 */
router.get(
  '/:id',
  validate(idParamConversationSchema, 'params'),
  getConversationById
);

/**
 * @swagger
 * /api/conversations/{id}:
 *   put:
 *     summary: Met à jour une conversation
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la conversation à mettre à jour
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conversation'
 *     responses:
 *       200:
 *         description: Conversation mise à jour
 *       404:
 *         description: Conversation non trouvée
 */
router.put(
  '/:id',
  validate(idParamConversationSchema, 'params'),
  errorHandler,
  updateConversation
);

/**
 * @swagger
 * /api/conversations/{id}:
 *   delete:
 *     summary: Supprime une conversation
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la conversation à supprimer
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 *       404:
 *         description: Conversation non trouvée
 */
router.delete(
  '/:id',
  validate(idParamConversationSchema, 'params'),
  errorHandler,
  deleteConversation
);

export default router;