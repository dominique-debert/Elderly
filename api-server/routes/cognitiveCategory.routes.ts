import { Router } from 'express';
import {
  createCognitiveCategory,
  getAllCognitiveCategories,
  getCognitiveCategoryById,
  updateCognitiveCategory,
  deleteCognitiveCategory
} from '@/controllers/cognitiveCategory.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validation/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Cognitive Categories
 *   description: Gestion des catégories d'exercices cognitifs
 */

/**
 * @swagger
 * /api/cognitive-categories:
 *   post:
 *     summary: Créer une nouvelle catégorie d'exercice cognitifs
 *     tags: [Cognitive Categories]
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
 *               name: "Mémoire"
 *               description: "Exercice cognitifs de la mémoire"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CognitiveCategory'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(categorySchema), errorHandler, createCognitiveCategory);

/**
 * @swagger
 * /api/cognitive-categories:
 *   get:
 *     summary: Récupérer toutes les catégories d'exercices cognitifs
 *     tags: [Cognitive Categories]
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
 *                     $ref: '#/components/schemas/CognitiveCategory'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllCognitiveCategories);

/**
 * @swagger
 * /api/cognitive-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Cognitive Categories]
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
 *               $ref: '#/components/schemas/CognitiveCategory'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, getCognitiveCategoryById);

/**
 * @swagger
 * /api/cognitive-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Cognitive Categories]
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
 *               name: "Mémoire"
 *               description: "Exercice cognitifs de la mémoire"
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CognitiveCategory'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateCognitiveCategory);

/**
 * @swagger
 * /api/cognitive-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Cognitive Categories]
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteCognitiveCategory);

export default router;
