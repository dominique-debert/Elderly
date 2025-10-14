import { Router } from "express";
import {
  createUrbanIssueCategory,
  getAllUrbanIssueCategories,
  getUrbanIssueCategoryById,
  updateUrbanIssueCategory,
  deleteUrbanIssueCategory,
} from "@/controllers";

import { categorySchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Urban Issue Categories
 *   description: Gestion des catégories de problèmes urbains
 */

/**
 * @swagger
 * /api/categories/urban-issues:
 *   post:
 *     summary: Créer une nouvelle catégorie de problèmes urbains
 *     tags: [Urban Issue Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - typeId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Propreté urbaine"
 *               description: "Catégorie pour les problèmes liés à la propreté urbaine"
 *               typeId: 5
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erreur serveur
 */
router.post("/", validate(categorySchema), createUrbanIssueCategory);

/**
 * @swagger
 * /api/categories/urban-issues:
 *   get:
 *     summary: Récupérer toutes les catégories de problèmes urbains
 *     tags: [Urban Issue Categories]
 *     responses:
 *       200:
 *         description: Liste des catégories récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 categories:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erreur serveur
 */
router.get("/", getAllUrbanIssueCategories);

/**
 * @swagger
 * /api/categories/urban-issues/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Issue Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la catégorie
 *     responses:
 *       200:
 *         description: Catégorie trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get("/:id", getUrbanIssueCategoryById);

/**
 * @swagger
 * /api/categories/urban-issues/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Issue Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Propreté urbaine"
 *               description: "Catégorie pour les problèmes liés à la propreté urbaine"
 *               typeId: 5
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erreur serveur
 */
router.put("/:id", updateUrbanIssueCategory);

/**
 * @swagger
 * /api/categories/urban-issues/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Issue Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la catégorie
 *     responses:
 *       200:
 *         description: Catégorie supprimée
 *       500:
 *         description: Erreur serveur
 */
router.delete("/:id", deleteUrbanIssueCategory);

export default router;
