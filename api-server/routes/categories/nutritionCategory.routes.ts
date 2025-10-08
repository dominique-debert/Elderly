import { Router } from "express";
import {
  createNutritionCategory,
  fetchAllNutritionCategories,
  fetchNutritionCategoryById,
  updateNutritionCategory,
  deleteNutritionCategory,
} from "@/controllers";

import { categorySchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Nutrition Categories
 *   description: Gestion des catégories pour les conseils nutritionnels
 */

/**
 * @swagger
 * /api/categories/nutrition:
 *   post:
 *     summary: Créer une nouvelle catégorie de conseils nutritionnels
 *     tags: [Nutrition Categories]
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
 *               name: "Régime végétarien"
 *               description: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *               typeId: 6
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
router.post("/", validate(categorySchema), createNutritionCategory);

/**
 * @swagger
 * /api/categories/nutrition:
 *   get:
 *     summary: Récupérer toutes les catégories de conseils nutritionnels
 *     tags: [Nutrition Categories]
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
router.get("/", fetchAllNutritionCategories);

/**
 * @swagger
 * /api/categories/nutrition/{id}:
 *   get:
 *     summary: Récupérer une catégorie de conseils nutritionnels par ID
 *     tags: [Nutrition Categories]
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
router.get("/:id", fetchNutritionCategoryById);

/**
 * @swagger
 * /api/categories/nutrition/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie de conseils nutritionnels
 *     tags: [Nutrition Categories]
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
 *               name: "Régime végétarien"
 *               description: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *               typeId: 6
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
router.put("/:id", updateNutritionCategory);

/**
 * @swagger
 * /api/categories/nutrition/{id}:
 *   delete:
 *     summary: Supprimer une catégorie de conseils nutritionnels
 *     tags: [Nutrition Categories]
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
router.delete("/:id", deleteNutritionCategory);

export default router;
