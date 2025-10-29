import { Router } from 'express';
import { createBadgeCategory, fetchAllBadgeCategories, fetchBadgeCategoryById, updateBadgeCategory, deleteBadgeCategory } from '@/controllers/index.controller';
import { validate } from '@/middlewares/validate';
import { categorySchema } from "@/validators/category.validator";
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Activity Categories
 *   description: Gestion des catégories d'activités
 */
/**
 * @swagger
 * /api/categories/badges:
 *   post:
 *     summary: Créer une nouvelle catégorie de badgges
 *     tags: [Badge Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - categoryName
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
 *               name: "Expert"
 *               description: "Catégorie de badge pour les experts"
 *               typeId: 1
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
router.post('/', validate(categorySchema), createBadgeCategory);
/**
 * @swagger
 * /api/categories/badges:
 *   get:
 *     summary: Récupérer toutes les catégories d'activités
 *     tags: [Badge Categories]
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
router.get('/', fetchAllBadgeCategories);
/**
 * @swagger
 * /api/categories/badges/{id}:
 *   get:
 *     summary: Récupérer une catégorie de badgge par ID
 *     tags: [Badge Categories]
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
router.get('/:id', fetchBadgeCategoryById);
/**
 * @swagger
 * /api/categories/badges/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie de badgge
 *     tags: [Badge Categories]
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
 *               description: "Catégorie pour les 'experts'"
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
router.put('/:id', updateBadgeCategory);
/**
 * @swagger
 * /api/categories/badges/{id}:
 *   delete:
 *     summary: Supprimer une catégorie de badgge
 *     tags: [Badge Categories]
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
router.delete('/:id', deleteBadgeCategory);
export default router;
