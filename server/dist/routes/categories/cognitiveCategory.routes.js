import { Router } from 'express';
import { createCognitiveCategory, fetchAllCognitiveCategories, fetchCognitiveCategoryById, updateCognitiveCategory, deleteCognitiveCategory } from '@/controllers/index.controller';
import { categorySchema } from '@/validators/category.validator';
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
 * /api/categories/cognitive:
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
 *               - typeId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Mémoire"
 *               description: "Exercice cognitifs de la mémoire"
 *               typeId: 3
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
router.post('/', validate(categorySchema), createCognitiveCategory);
/**
 * @swagger
 * /api/categories/cognitive:
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
 *                     $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', fetchAllCognitiveCategories);
/**
 * @swagger
 * /api/categories/cognitive/{id}:
 *   get:
 *     summary: Récupérer une catégorie d'exercice cognitif par ID
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
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', fetchCognitiveCategoryById);
/**
 * @swagger
 * /api/categories/cognitive/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie d'exercice cognitif
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
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Mémoire"
 *               description: "Exercice cognitifs de la mémoire"
 *               typeId: 3
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
router.put('/:id', updateCognitiveCategory);
/**
 * @swagger
 * /api/categories/cognitive/{id}:
 *   delete:
 *     summary: Supprimer une catégorie d'exercice cognitif
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
router.delete('/:id', deleteCognitiveCategory);
export default router;
