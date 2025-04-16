import { Router } from 'express';
import {
  createNutritionalCategory,
  getAllNutritionalCategories,
  getNutritionalCategoryById,
  updateNutritionalCategory,
  deleteNutritionalCategory
} from '@/controllers/nutritionalCategory.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validation/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Nutritional Categories
 *   description: Gestion des catégories pour les conseils nutritionnels
 */

/**
 * @swagger
 * /api/nutritional-categories:
 *   post:
 *     summary: Créer une nouvelle catégorie de conseils nutritionnels
 *     tags: [Nutritional Categories]
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
 *               name: "Régime végétarien"
 *               description: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NutritionalCategory'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(categorySchema), errorHandler, createNutritionalCategory);

/**
 * @swagger
 * /api/nutritional-categories:
 *   get:
 *     summary: Récupérer toutes les catégories d'exercices cognitifs
 *     tags: [Nutritional Categories]
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
 *                     $ref: '#/components/schemas/NutritionalCategory'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllNutritionalCategories);

/**
 * @swagger
 * /api/nutritional-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Nutritional Categories]
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
 *               $ref: '#/components/schemas/NutritionalCategory'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, getNutritionalCategoryById);

/**
 * @swagger
 * /api/nutritional-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Nutritional Categories]
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
 *               name: "Régime végétarien"
 *               description: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NutritionalCategory'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateNutritionalCategory);

/**
 * @swagger
 * /api/nutritional-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Nutritional Categories]
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteNutritionalCategory);

export default router;
