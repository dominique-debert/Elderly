import { Router } from 'express';
import {
  createHelpCategory,
  fetchAllHelpCategories,
  fetchHelpCategoryById,
  updateHelpCategory,
  deleteHelpCategory
} from '@/controllers/index.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validators/category.schema';
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
 *               name: "Aide à domicile"
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
router.post('/', validate(categorySchema), errorHandler, createHelpCategory);

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
router.get('/', errorHandler, fetchAllHelpCategories);

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
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, fetchHelpCategoryById);

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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Aide à domicile"
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
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateHelpCategory);

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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteHelpCategory);

export default router;
