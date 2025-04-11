// routes/conversation.routes.js
import express from 'express';
import {
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation,
  deleteConversation
} from '../controllers/conversation.controller.js';

const conversationRoutes = express.Router();

/**
 * @swagger
 * /api/conversations:
 *   get:
 *     summary: Récupère toutes les conversations
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
conversationRoutes.get('/', getAllConversations);

/**
 * @swagger
 * /api/conversations/{id}:
 *   get:
 *     summary: Récupère une conversation par ID
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la conversation
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
conversationRoutes.get('/:id', getConversationById);

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
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conversation'
 */
conversationRoutes.post('/', createConversation);

/**
 * @swagger
 * /api/conversations/{id}:
 *   put:
 *     summary: Met à jour une conversation
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la conversation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conversation'
 *     responses:
 *       200:
 *         description: Conversation mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conversation'
 *       404:
 *         description: Conversation non trouvée
 */
conversationRoutes.put('/:id', updateConversation);

/**
 * @swagger
 * /api/conversations/{id}:
 *   delete:
 *     summary: Supprime une conversation
 *     tags: [Conversations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la conversation
 *     responses:
 *       204:
 *         description: Conversation supprimée
 *       404:
 *         description: Conversation non trouvée
 */
conversationRoutes.delete('/:id', deleteConversation);

export default conversationRoutes;
