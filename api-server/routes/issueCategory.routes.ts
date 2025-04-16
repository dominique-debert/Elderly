import { Router } from 'express';
import {
  createIssueCategory,
  getAllIssueCategories,
  getIssueCategoryById,
  updateIssueCategory,
  deleteIssueCategory
} from '@/controllers/issueCategory.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validation/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Issue Categories
 *   description: Gestion des catégories d'aide
 */

/**
 * @swagger
 * /api/issue-categories:
 *   post:
 *     summary: Créer une nouvelle catégorie de problèmes
 *     tags: [Issue Categories]
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
 *               name: "Propreté urbaine"
 *               description: "Catégorie pour les problèmes liés à la propreté urbaine"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IssueCategory'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(categorySchema), errorHandler, createIssueCategory);

/**
 * @swagger
 * /api/issue-categories:
 *   get:
 *     summary: Récupérer toutes les catégories d'exercices cognitifs
 *     tags: [Issue Categories]
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
 *                     $ref: '#/components/schemas/IssueCategory'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllIssueCategories);

/**
 * @swagger
 * /api/issue-categories/{id}:
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
 *               $ref: '#/components/schemas/IssueCategory'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, getIssueCategoryById);

/**
 * @swagger
 * /api/issue-categories/{id}:
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
 *             example:
 *               name: "Propreté urbaine"
 *               description: "Catégorie pour les problèmes liés à la propreté urbaine"
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/IssueCategory'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateIssueCategory);

/**
 * @swagger
 * /api/issue-categories/{id}:
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteIssueCategory);

export default router;
