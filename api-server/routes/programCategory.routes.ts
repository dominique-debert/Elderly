import { Router } from 'express';
import {
  createProgramCategory,
  getAllProgramCategories,
  getProgramCategoryById,
  updateProgramCategory,
  deleteProgramCategory
} from '@/controllers/programCategory.controller';

import { categorySchema, idParamCategorySchema } from '@/schemas/validation/category.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Program Categories
 *   description: Gestion des catégories pour les programmes de remise en forme
 */

/**
 * @swagger
 * /api/program-categories:
 *   post:
 *     summary: Créer une nouvelle catégorie de programme
 *     tags: [Program Categories]
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
 *               name: "Programme de remise en forme"
 *               description: "Catégorie pour les programmes d'activités"
 *     responses:
 *       201:
 *         description: Catégorie créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProgramCategory'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(categorySchema), errorHandler, createProgramCategory);

/**
 * @swagger
 * /api/program-categories:
 *   get:
 *     summary: Récupérer toutes les catégories d'exercices cognitifs
 *     tags: [Program Categories]
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
 *                     $ref: '#/components/schemas/ProgramCategory'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllProgramCategories);

/**
 * @swagger
 * /api/program-categories/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Program Categories]
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
 *               $ref: '#/components/schemas/ProgramCategory'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamCategorySchema, 'params'), errorHandler, getProgramCategoryById);

/**
 * @swagger
 * /api/program-categories/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Program Categories]
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
 *               $ref: '#/components/schemas/ProgramCategory'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamCategorySchema, 'params'), errorHandler, updateProgramCategory);

/**
 * @swagger
 * /api/program-categories/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Program Categories]
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
router.delete('/:id', validate(idParamCategorySchema, 'params'), errorHandler, deleteProgramCategory);

export default router;
