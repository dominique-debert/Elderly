import { Router } from 'express';
import {
  createBadgeCategory,
  getAllBadgeCategories,
  getBadgeCategoryById,
  updateBadgeCategory,
  deleteBadgeCategory
} from '@/controllers/index.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validation/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Badge Categories
 *   description: Gestion des catégories d'activités
 */

/**
 * @swagger
 * /api/badge-categories:
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
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             example:
 *               name: "Expert"
 *               description: "Badge Expert"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadgeCategory'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(categorySchema), errorHandler, createBadgeCategory);

/**
 * @swagger
 * /api/badge-categories:
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
 *                     $ref: '#/components/schemas/BadgeCategory'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllBadgeCategories);

/**
 * @swagger
 * /api/badge-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
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
 *               $ref: '#/components/schemas/BadgeCategory'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, getBadgeCategoryById);

/**
 * @swagger
 * /api/badge-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
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
 *             example:
 *               name: "Sports"
 *               description: "Catégorie pour les experts"
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadgeCategory'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateBadgeCategory);

/**
 * @swagger
 * /api/badge-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
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
