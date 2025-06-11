import { Router } from 'express';
import { validate } from '@/middlewares/validate';

import {
  conversationParticipantSchema,
  idParamConversationParticipantSchema
} from '../validators/conversationParticipant.validator';

import {
  createConversationParticipant,
  getAllConversationParticipants,
  getConversationParticipantById,
  updateConversationParticipant,
  deleteConversationParticipant
} from '@/controllers/index.controller';

const router = Router();

/**
 * @swagger
 * /api/conversations-participants:
 *   post:
 *     summary: Crée un nouveau participant de conversation
 *     tags: [Conversation participants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConversationParticipant'
 *     responses:
 *       201:
 *         description: Participant de conversation créé
 */
router.post(
  '/',
  validate(conversationParticipantSchema),
  createConversationParticipant
);

/**
 * @swagger
 * /api/conversations-participants:
 *   get:
 *     summary: Récupère la liste de tous les participants de conversation
 *     tags: [Conversation participants]
 *     responses:
 *       200:
 *         description: Liste des participants de conversation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ConversationParticipant'
 */
router.get(
  '/',
  getAllConversationParticipants
);

/**
 * @swagger
 * /api/conversations-participants/{id}:
 *   get:
 *     summary: Récupère un participant de conversation par son ID
 *     tags: [Conversation participants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du participant de conversation à récupérer
 *     responses:
 *       200:
 *         description: Participant de conversation trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ConversationParticipant'
 *       404:
 *         description: Participant de conversation non trouvé
 */
router.get(
  '/:id',
  validate(idParamConversationParticipantSchema, 'params'),
  getConversationParticipantById
);

/**
 * @swagger
 * /api/conversations-participants/{id}:
 *   put:
 *     summary: Met à jour un participant de conversation
 *     tags: [Conversation participants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du participant de conversation à mettre à jour
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConversationParticipant'
 *     responses:
 *       200:
 *         description: Participant de conversation mise à jour
 *       404:
 *         description: Participant de conversation non trouvé
 */
router.put(
  '/:id',
  validate(idParamConversationParticipantSchema, 'params'),
  updateConversationParticipant
);

/**
 * @swagger
 * /api/conversations-participants/{id}:
 *   delete:
 *     summary: Supprime un participant de conversation
 *     tags: [Conversation participants]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du participant de conversation à supprimer
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 *       404:
 *         description: Participant de conversation non trouvé
 */
router.delete(
  '/:id',
  validate(idParamConversationParticipantSchema, 'params'),
  deleteConversationParticipant
);

export default router;