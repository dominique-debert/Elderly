import { Router } from 'express';
import {
  createBadgeCategory,
  fetchAllBadgeCategories,
  fetchBadgeCategoryById,
  updateBadgeCategory,
  deleteBadgeCategory
} from '@/controllers/index.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validators/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Badge Categories
 *   description: Gestion des catégories de badges
 */

/**
 * @swagger
 * /api/categories/badges:
 *   post:
 *     summary: Créer une nouvelle catégorie de badge
 *     tags: [Badge Categories]
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
 *               name: "Expert"
 *               description: "Badge Expert"
 *               typeId: 2
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
router.post('/', validate(categorySchema), errorHandler, createBadgeCategory);

/**
 * @swagger
 * /api/categories/badges:
 *   get:
 *     summary: Récupérer toutes les catégories de badges
 *     tags: [Badge Categories]
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
router.get('/', errorHandler, fetchAllBadgeCategories);

/**
 * @swagger
 * /api/categories/badges/{id}:
 *   get:
 *     summary: Récupérer une catégorie de badge par ID
 *     tags: [Badge Categories]
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
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, fetchBadgeCategoryById);

/**
 * @swagger
 * /api/categories/badges/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie de badge
 *     tags: [Badge Categories]
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
 *               name: "Sports"
 *               description: "Catégorie pour les experts"
 *               typeId: 2
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
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateBadgeCategory);

/**
 * @swagger
 * /api/categories/badges/{id}:
 *   delete:
 *     summary: Supprimer une catégorie de badge
 *     tags: [Badge Categories]
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteBadgeCategory);

export default router;
