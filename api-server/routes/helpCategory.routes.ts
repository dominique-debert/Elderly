import { Router } from 'express';
import {
  createHelpCategory,
  getAllHelpCategories,
  getHelpCategoryById,
  updateHelpCategory,
  deleteHelpCategory
} from '@/controllers/helpCategory.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validation/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Help Categories
 *   description: Gestion des catégories d'aide
 */

/**
 * @swagger
 * /api/help-categories:
 *   post:
 *     summary: Créer une nouvelle catégorie de badge
 *     tags: [Help Categories]
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
 *               name: "Aide à domicile"
 *               description: "Catégorie pour les services d'aide à domicile"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpCategory'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(categorySchema), errorHandler, createHelpCategory);

/**
 * @swagger
 * /api/help-categories:
 *   get:
 *     summary: Récupérer toutes les catégories d'exercices cognitifs
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
 *                     $ref: '#/components/schemas/HelpCategory'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllHelpCategories);

/**
 * @swagger
 * /api/help-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
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
 *               $ref: '#/components/schemas/HelpCategory'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, getHelpCategoryById);

/**
 * @swagger
 * /api/help-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             example:
 *               name: "Aide à domicile"
 *               description: "Catégorie pour les services d'aide à domicile"
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HelpCategory'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateHelpCategory);

/**
 * @swagger
 * /api/help-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteHelpCategory);

export default router;
