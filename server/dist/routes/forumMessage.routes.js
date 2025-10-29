import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import { forumMessageSchema, idParamForumMessageSchema } from '../validators/forumMessage.validator';
import { createForumMessage, getAllForumMessages, getForumMessageById, updateForumMessage, deleteForumMessage } from '@/controllers/index.controller';
const router = Router();
/**
 * @swagger
 * /api/forum-messages:
 *   post:
 *     summary: Crée un nouveau message de forum
 *     tags: [Forum messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForumMessage'
 *     responses:
 *       201:
 *         description: Message créé
 */
router.post('/', validate(forumMessageSchema), createForumMessage);
/**
 * @swagger
 * /api/forum-messages:
 *   get:
 *     summary: Récupère la liste de tous les messages de forum
 *     tags: [Forum messages]
 *     responses:
 *       200:
 *         description: Liste des messages de forum
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ForumMessage'
 */
router.get('/', getAllForumMessages);
/**
 * @swagger
 * /api/forum-messages/{id}:
 *   get:
 *     summary: Récupère un message de forum par son ID
 *     tags: [Forum messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du message à récupérer
 *     responses:
 *       200:
 *         description: Message trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForumMessage'
 *       404:
 *         description: Message non trouvé
 */
router.get('/:id', validate(idParamForumMessageSchema, 'params'), getForumMessageById);
/**
 * @swagger
 * /api/forum-messages/{id}:
 *   put:
 *     summary: Met à jour un message de forum
 *     tags: [Forum messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du message à mettre à jour
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForumMessage'
 *     responses:
 *       200:
 *         description: Message mise à jour
 *       404:
 *         description: Message non trouvé
 */
router.put('/:id', validate(idParamForumMessageSchema, 'params'), updateForumMessage);
/**
 * @swagger
 * /api/forum-messages/{id}:
 *   delete:
 *     summary: Supprime un message de forum
 *     tags: [Forum messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du message à supprimer
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 *       404:
 *         description: Message non trouvé
 */
router.delete('/:id', validate(idParamForumMessageSchema, 'params'), deleteForumMessage);
export default router;
