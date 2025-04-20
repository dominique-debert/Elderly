import { Router } from 'express';
import {
  createResourceCategory,
  getAllResourceCategories,
  getResourceCategoryById,
  updateResourceCategory,
  deleteResourceCategory
} from '@/controllers/index.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validation/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Resource Categories
 *   description: Gestion des catégories pour les ressources
 */

/**
 * @swagger
 * /api/resource-categories:
 *   post:
 *     summary: Créer une nouvelle catégorie de ressource
 *     tags: [Resource Categories]
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
 *               name: "Ressources éducatives"
 *               description: "Catégorie pour les ressources éducatives"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResourceCategory'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(categorySchema), errorHandler, createResourceCategory);

/**
 * @swagger
 * /api/resource-categories:
 *   get:
 *     summary: Récupérer toutes les catégories de ressources
 *     tags: [Resource Categories]
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
 *                     $ref: '#/components/schemas/ResourceCategory'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllResourceCategories);

/**
 * @swagger
 * /api/resource-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Resource Categories]
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
 *               $ref: '#/components/schemas/ResourceCategory'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, getResourceCategoryById);

/**
 * @swagger
 * /api/resource-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Resource Categories]
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
 *               name: "Ressources éducatives"
 *               description: "Catégorie pour les ressources éducatives"
 *     responses:
 *       200:
 *         description: Catégorie mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResourceCategory'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateResourceCategory);

/**
 * @swagger
 * /api/resource-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Resource Categories]
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteResourceCategory);

export default router;
