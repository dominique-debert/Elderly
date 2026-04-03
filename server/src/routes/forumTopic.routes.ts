import { Router } from "express";
import { validate } from "@/middlewares";
import { forumTopicSchema } from "@/validators";

import {
  createForumTopic,
  getAllForumTopics,
  getForumTopicById,
  updateForumTopic,
  deleteForumTopic,
  getForumStatistics,
} from "@/controllers";

const router = Router();

/**
 * @swagger
 * /api/forum-topics:
 *   post:
 *     summary: Crée un nouveau sujet de forum
 *     tags: [Forum messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForumTopic'
 *     responses:
 *       201:
 *         description: Sujet créé
 */
router.post("/", validate(forumTopicSchema), createForumTopic);

/**
 * @swagger
 * /api/forum-topics:
 *   get:
 *     summary: Récupère la liste de tous les sujets de forum
 *     tags: [Forum messages]
 *     responses:
 *       200:
 *         description: Liste des sujets de forum
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ForumTopic'
 */
router.get("/", getAllForumTopics);

/**
 * @swagger
 * /api/forum-topics/statistics:
 *   get:
 *     summary: Récupère les statistiques du forum
 *     tags: [Forum messages]
 *     responses:
 *       200:
 *         description: Statistiques du forum
 */
router.get("/statistics", getForumStatistics);

/**
 * @swagger
 * /api/forum-topics/{id}:
 *   get:
 *     summary: Récupère un sujet de forum par son ID
 *     tags: [Forum messages]
 *     parameters:
 *       - in: path
 *         name: id
 */
router.get("/:id", getForumTopicById);

/**
 * @swagger
 * /api/forum-topics/{id}:
 *   put:
 *     summary: Met à jour un sujet de forum par son ID
 *     tags: [Forum messages]
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForumTopic'
 *     responses:
 *       200:
 *         description: Sujet mis à jour
 */
router.put("/:id", validate(forumTopicSchema), updateForumTopic);

/**
 * @swagger
 * /api/forum-topics/{id}:
 *   delete:
 *     summary: Supprime un sujet de forum par son ID
 *     tags: [Forum messages]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       204:
 *         description: Sujet supprimé
 */
router.delete("/:id", deleteForumTopic);

export default router;
