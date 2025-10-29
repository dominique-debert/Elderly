import { Router } from 'express';
import { createProgramCategory, fetchAllProgramCategories, fetchProgramCategoryById, updateProgramCategory, deleteProgramCategory } from '@/controllers/index.controller';
import { categorySchema } from '@/validators/category.validator';
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
 * /api/categories/programs:
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
 *               - typeId
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Programme de remise en forme"
 *               description: "Catégorie pour les programmes d'activités"
 *               typeId: 7
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
router.post('/', validate(categorySchema), createProgramCategory);
/**
 * @swagger
 * /api/categories/programs:
 *   get:
 *     summary: Récupérer toutes les catégories de programmes
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
 *                     $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', fetchAllProgramCategories);
/**
 * @swagger
 * /api/categories/programs/{id}:
 *   get:
 *     summary: Récupérer une catégorie de programme par ID
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
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Catégorie non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', fetchProgramCategoryById);
/**
 * @swagger
 * /api/categories/programs/{id}:
 *   put:
 *     summary: Mettre à jour une catégorie de programme
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
 *               typeId:
 *                 type: integer
 *             example:
 *               name: "Régime végétarien"
 *               description: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *               typeId: 7
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
router.put('/:id', updateProgramCategory);
/**
 * @swagger
 * /api/categories/programs/{id}:
 *   delete:
 *     summary: Supprimer une catégorie de programme
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
router.delete('/:id', deleteProgramCategory);
export default router;
