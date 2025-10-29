import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import { forumCategorySchema, idParamForumCategorySchema } from '../../validators/forumCategory.validator';
import { createForumCategory, getAllForumCategories, getForumCategoryById, updateForumCategory, deleteForumCategory } from '@/controllers/index.controller';
const router = Router();
/**
 * @swagger
 * /api/forum:
 *   post:
 *     summary: Crée une nouvelle catégorie de forum
 *     tags: [Forum categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForumCategory'
 *     responses:
 *       201:
 *         description: Catégorie créée
 */
router.post('/', validate(forumCategorySchema), createForumCategory);
/**
 * @swagger
 * /api/forum:
 *   get:
 *     summary: Récupère la liste de toutes les catégories de forum
 *     tags: [Forum categories]
 *     responses:
 *       200:
 *         description: Liste des catégories de forum
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ForumCategory'
 */
router.get('/', getAllForumCategories);
/**
 * @swagger
 * /api/forum/{id}:
 *   get:
 *     summary: Récupère une catégorie de forum par son ID
 *     tags: [Forum categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la catégorie à récupérer
 *     responses:
 *       200:
 *         description: Catégorie trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForumCategory'
 *       404:
 *         description: Catégorie non trouvée
 */
router.get('/:id', validate(idParamForumCategorySchema, 'params'), getForumCategoryById);
/**
 * @swagger
 * /api/forum/{id}:
 *   put:
 *     summary: Met à jour une catégorie de forum
 *     tags: [Forum categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la catégorie à mettre à jour
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForumCategory'
 *     responses:
 *       200:
 *         description: Catégorie mise à jour
 *       404:
 *         description: Catégorie non trouvée
 */
router.put('/:id', validate(idParamForumCategorySchema, 'params'), updateForumCategory);
/**
 * @swagger
 * /api/forum/{id}:
 *   delete:
 *     summary: Supprime une catégorie de forum
 *     tags: [Forum categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la catégorie à supprimer
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 *       404:
 *         description: Catégorie non trouvée
 */
router.delete('/:id', validate(idParamForumCategorySchema, 'params'), deleteForumCategory);
export default router;
