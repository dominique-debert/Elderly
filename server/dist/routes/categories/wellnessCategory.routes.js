import { Router } from 'express';
import { createWellnessCategory, fetchAllWellnessCategories, fetchWellnessCategoryById, updateWellnessCategory, deleteWellnessCategory } from '@/controllers/index.controller';
import { categorySchema } from '@/validators/category.validator';
import { validate } from '@/middlewares/validate';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Wellness Categories
 *   description: Gestion des catégories de bien-être
 */
/**
 * @swagger
 * /api/categories/wellness:
 *   post:
 *     summary: Créer une nouvelle catégorie de bien-être
 *     tags: [Wellness Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - typeId
 *               - chapterId
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
 *               name: "Bien-être mental"
 *               description: "Catégorie pour les activités liées au bien-être mental"
 *               typeId: 12
 *               chapterId: 12
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
router.post('/', validate(categorySchema), createWellnessCategory);
/**
 * @swagger
 * /api/categories/wellness:
 *   get:
 *     summary: Récupérer toutes les catégories de bien-être
 *     tags: [Wellness Categories]
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
router.get('/', fetchAllWellnessCategories);
/**
 * @swagger
 * /api/categories/wellness/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Wellness Categories]
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
router.get('/:id', fetchWellnessCategoryById);
/**
 * @swagger
 * /api/categories/wellness/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Wellness Categories]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               name: "Bien-être mental"
 *               description: "Catégorie pour les activités liées au bien-être mental"
 *               typeId: 12
 *               chapterId: 12
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
router.put('/:id', updateWellnessCategory);
/**
 * @swagger
 * /api/categories/wellness/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Wellness Categories]
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
router.delete('/:id', deleteWellnessCategory);
export default router;
