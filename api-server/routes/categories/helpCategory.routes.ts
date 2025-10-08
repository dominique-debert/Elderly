import { Router } from "express";
import {
  createHelpCategory,
  fetchAllHelpCategories,
  fetchHelpCategoryById,
  updateHelpCategory,
  deleteHelpCategory,
} from "@/controllers";

import { categorySchema } from "@/validators/category.validator";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Help Categories
 *   description: Gestion des catégories d'aide
 */

/**
 * @swagger
 * /api/categories/help:
 *   post:
 *     summary: Créer une nouvelle catégorie d'aide
 *     tags: [Help Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - categoryName
 *               - typeId
 *             properties:
 *               categoryName:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *             example:
 *               categoryName: "Aide à domicile"
 *               description: "Catégorie pour les services d'aide à domicile"
 *               typeId: 4
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
router.post("/", validate(categorySchema), createHelpCategory);

/**
 * @swagger
 * /api/categories/help:
 *   get:
 *     summary: Récupérer toutes les catégories d'aide
 *     tags: [Help Categories]
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
router.get("/", fetchAllHelpCategories);

/**
 * @swagger
 * /api/categories/help/{id}:
 *   get:
 *     summary: Récupérer une catégorie d'aide par ID
 *     tags: [Help Categories]
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
router.get("/:id", fetchHelpCategoryById);

/**
 * @swagger
 * /api/categories/help/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie d'aide
 *     tags: [Help Categories]
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
 *               categoryName:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *             example:
 *               categoryName: "Aide à domicile"
 *               description: "Catégorie pour les services d'aide à domicile"
 *               typeId: 4
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
router.put("/:id", updateHelpCategory);

/**
 * @swagger
 * /api/categories/help/{id}:
 *   delete:
 *     summary: Supprimer une catégorie d'aide
 *     tags: [Help Categories]
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
router.delete("/:id", deleteHelpCategory);

export default router;
