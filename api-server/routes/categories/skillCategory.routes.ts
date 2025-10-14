import { Router } from "express";
import {
  createSkillCategory,
  getAllSkillCategories,
  getSkillCategoryById,
  updateSkillCategory,
  deleteSkillCategory,
} from "@/controllers";

import { categorySchema } from "@/validators";
import { validate } from "@/middlewares";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Skill Categories
 *   description: Gestion des catégories pour les compétences
 */

/**
 * @swagger
 * /api/categories/skills:
 *   post:
 *     summary: Créer une nouvelle catégorie de compétences
 *     tags: [Skill Categories]
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
 *               name: "Compétences en informatique"
 *               description: "Catégorie pour les compétences liées à l'informatique"
 *               typeId: 11
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
router.post("/", validate(categorySchema), createSkillCategory);

/**
 * @swagger
 * /api/categories/skills:
 *   get:
 *     summary: Récupérer toutes les catégories de compétences
 *     tags: [Skill Categories]
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
router.get("/", getAllSkillCategories);

/**
 * @swagger
 * /api/categories/skills/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Skill Categories]
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
router.get("/:id", getSkillCategoryById);

/**
 * @swagger
 * /api/categories/skills/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Skill Categories]
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
 *               name: "Compétences en informatique"
 *               description: "Catégorie pour les compétences en informatique"
 *               typeId: 11
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
router.put("/:id", updateSkillCategory);

/**
 * @swagger
 * /api/categories/skills/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Skill Categories]
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
router.delete("/:id", deleteSkillCategory);

export default router;
