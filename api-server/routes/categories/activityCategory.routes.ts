import { Router } from 'express';
import {
  createActivityCategory,
  fetchAllActivityCategories,
  fetchActivityCategoryById,
  updateActivityCategory,
  deleteActivityCategory
} from '@/controllers/index.controller';

import { activityCategorySchema } from '../../validators/activityCategory.validator';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Activity Categories
 *   description: Gestion des catégories d'activités
 */

/**
 * @swagger
 * /api/categories/activities:
 *   post:
 *     summary: Créer une nouvelle catégorie d'activités
 *     tags: [Activity Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - categoryName
 *               - typeId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *               chapterId:
 *                 type: integer
 *             example:
 *               name: "Sport"
 *               description: "Tout ce qui touche au sport"
 *               typeId: 1
 *               chapterId: 1
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
router.post('/', validate(activityCategorySchema), errorHandler, createActivityCategory);

/**
 * @swagger
 * /api/categories/activities:
 *   get:
 *     summary: Récupérer toutes les catégories d'activités
 *     tags: [Activity Categories]
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
router.get('/', errorHandler, fetchAllActivityCategories);

/**
 * @swagger
 * /api/categories/activities/{id}:
 *   get:
 *     summary: Récupérer une catégorie d'activité par ID
 *     tags: [Activity Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
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
router.get('/:id', errorHandler, fetchActivityCategoryById);

/**
 * @swagger
 * /api/categories/activities/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie d'activité
 *     tags: [Activity Categories]
 *     parameters:
 *       - in: path
 *         categoryName: id
 *         required: true
 *         schema:
 *           type: integer
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
 *               chapterId:
 *                 type: integer
 *             example:
 *               name: "Sports"
 *               description: "Catégorie pour les activités sportives"
 *               typeId: 1
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
router.put('/:id', errorHandler, updateActivityCategory);

/**
 * @swagger
 * /api/categories/activities/{id}:
 *   delete:
 *     summary: Supprimer une catégorie d'activité
 *     tags: [Activity Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la catégorie
 *     responses:
 *       200:
 *         description: Catégorie supprimée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', errorHandler, deleteActivityCategory);

export default router;
