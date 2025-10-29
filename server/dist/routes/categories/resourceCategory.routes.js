import { Router } from 'express';
import { createResourceCategory, fetchAllResourceCategories, fetchResourceCategoryById, updateResourceCategory, deleteResourceCategory } from '@/controllers/index.controller';
import { categorySchema } from '@/validators/category.validator';
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
 * /api/categories/resources:
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
 *               - typeId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Ressources éducatives"
 *               description: "Catégorie pour les ressources éducatives"
 *               typeId: 9
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
router.post('/', validate(categorySchema), createResourceCategory);
/**
 * @swagger
 * /api/categories/resources:
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
 *                     $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', fetchAllResourceCategories);
/**
 * @swagger
 * /api/categories/resources/{id}:
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
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', fetchResourceCategoryById);
/**
 * @swagger
 * /api/categories/resources/{id}:
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
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Ressources éducatives"
 *               description: "Catégorie pour les ressources éducatives"
 *               typeId: 9
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
router.put('/:id', updateResourceCategory);
/**
 * @swagger
 * /api/categories/resources/{id}:
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
router.delete('/:id', deleteResourceCategory);
export default router;
