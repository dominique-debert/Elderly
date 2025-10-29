import { Router } from 'express';
import { createServiceCategory, fetchAllServiceCategories, fetchServiceCategoryById, updateServiceCategory, deleteServiceCategory } from '@/controllers/index.controller';
import { categorySchema } from '@/validators/category.validator';
import { validate } from '@/middlewares/validate';
const router = Router();
/**
 * @swagger
 * tags:
 *   name: Service Categories
 *   description: Gestion des catégories pour les services
 */
/**
 * @swagger
 * /api/categories/services:
 *   post:
 *     summary: Créer une nouvelle catégorie de service
 *     tags: [Service Categories]
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
 *               name: "Services de santé"
 *               description: "Catégorie pour les services liés à la santé"
 *               typeId: 10
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
router.post('/', validate(categorySchema), createServiceCategory);
/**
 * @swagger
 * /api/categories/services:
 *   get:
 *     summary: Récupérer toutes les catégories de services
 *     tags: [Service Categories]
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
router.get('/', fetchAllServiceCategories);
/**
 * @swagger
 * /api/categories/services/{id}:
 *   get:
 *     summary: Récupérer une catégorie par ID
 *     tags: [Service Categories]
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
router.get('/:id', fetchServiceCategoryById);
/**
 * @swagger
 * /api/categories/services/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie
 *     tags: [Service Categories]
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
 *               name: "Services de santé"
 *               description: "Catégorie pour les services liés à la santé"
 *               typeId: 10
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
router.put('/:id', updateServiceCategory);
/**
 * @swagger
 * /api/categories/services/{id}:
 *   delete:
 *     summary: Supprimer une catégorie
 *     tags: [Service Categories]
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
router.delete('/:id', deleteServiceCategory);
export default router;
