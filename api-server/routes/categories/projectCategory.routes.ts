import { Router } from 'express';
import {
  createProjectCategory,
  fetchAllProjectCategories,
  fetchProjectCategoryById,
  updateProjectCategory,
  deleteProjectCategory
} from '@/controllers/index.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validators/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Program Categories
 *   description: Gestion des catégories pour les projets
 */

/**
 * @swagger
 * /api/categories/projects:
 *   post:
 *     summary: Créer une nouvelle catégorie de projet
 *     tags: [Project Categories]
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
 *               name: "Aménagement urbain"
 *               description: "Catégorie pour les projets d'aménagement urbain"
 *               typeId: 8
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
router.post('/', validate(categorySchema), errorHandler, createProjectCategory);

/**
 * @swagger
 * /api/categories/projects:
 *   get:
 *     summary: Récupérer toutes les catégories de projets
 *     tags: [Project Categories]
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
router.get('/', errorHandler, fetchAllProjectCategories);

/**
 * @swagger
 * /api/categories/projects/{id}:
 *   get:
 *     summary: Récupérer une catégorie de projet par ID
 *     tags: [Project Categories]
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
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, fetchProjectCategoryById);

/**
 * @swagger
 * /api/categories/projects/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie de projet
 *     tags: [Project Categories]
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
 *               name: "Aménagement urbain"
 *               description: "Catégorie pour les projets d'aménagement urbain"
 *               typeId: 8
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
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateProjectCategory);

/**
 * @swagger
 * /api/categories/projects/{id}:
 *   delete:
 *     summary: Supprimer une catégorie de projet
 *     tags: [Project Categories]
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteProjectCategory);

export default router;
