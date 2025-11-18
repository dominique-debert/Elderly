import { Router } from "express";
import { validate } from "@/middlewares";
import { forumSectionSchema } from "@/validators";

import {
  createForumSection,
  getAllForumSections,
  getForumSectionById,
  updateForumSection,
  deleteForumSection,
} from "@/controllers";

const router = Router();

/**
 * @swagger
 * /api/forum-sections:
 *   post:
 *     summary: Crée une nouvelle section de forum
 *     tags: [Forum sections]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForumSection'
 *     responses:
 *       201:
 *         description: Section créée
 */
router.post("/", validate(forumSectionSchema), createForumSection);

/**
 * @swagger
 * /api/forum-sections:
 *   get:
 *     summary: Récupère la liste de toutes les sections de forum
 *     tags: [Forum sections]
 *     responses:
 *       200:
 *         description: Liste des sections de forum
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ForumSection'
 */
router.get("/", getAllForumSections);

/**
 * @swagger
 * /api/forum-sections/{id}:
 *   get:
 *     summary: Récupère une section de forum par son ID
 *     tags: [Forum sections]
 *     parameters:
 *       - in: path
 *         name: id
 */
router.get("/:id", getForumSectionById);

/**
 * @swagger
 * /api/forum-sections/{id}:
 *   put:
 *     summary: Met à jour une section de forum par son ID
 *     tags: [Forum sections]
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForumSection'
 *     responses:
 *       200:
 *         description: Section mise à jour
 */
router.put("/:id", validate(forumSectionSchema), updateForumSection);

/**
 * @swagger
 * /api/forum-sections/{id}:
 *   delete:
 *     summary: Supprime une section de forum par son ID
 *     tags: [Forum sections]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       204:
 *         description: Section supprimée avec succès
 */
router.delete("/:id", deleteForumSection);

export default router;
