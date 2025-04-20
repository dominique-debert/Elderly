import { Router } from 'express';
import {
  createSkillCategory,
  getAllSkillCategories,
  getSkillCategoryById,
  updateSkillCategory,
  deleteSkillCategory
} from '@/controllers/index.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validation/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Skill Categories
 *   description: Gestion des catégories pour les compétences
 */

/**
 * @swagger
 * /api/skill-categories:
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
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             example:
 *               name: "Compétences en informatique"
 *               description: "Catégorie pour les compétences liées à l'informatique"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SkillCategory'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(categorySchema), errorHandler, createSkillCategory);

/**
 * @swagger
 * /api/skill-categories:
 *   get:
 *     summary: Récupérer toutes les catégories de ressources
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
 *                     $ref: '#/components/schemas/SkillCategory'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllSkillCategories);

/**
 * @swagger
 * /api/skill-categories/{id}:
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
 *               $ref: '#/components/schemas/SkillCategory'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, getSkillCategoryById);

/**
 * @swagger
 * /api/skill-categories/{id}:
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
 *             example:
 *               name: "Compétences en informatique"
 *               description: "Catégorie pour les compétences en informatique"
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SkillCategory'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateSkillCategory);

/**
 * @swagger
 * /api/skill-categories/{id}:
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteSkillCategory);

export default router;
