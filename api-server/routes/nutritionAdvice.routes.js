import express from 'express';
import {
  createAdvice,
  getAllAdvices,
  getAdviceById,
  updateAdvice,
  deleteAdvice,
} from '../controllers/nutritionAdvice.controller.js';

const nutritionAdviceRoutes = express.Router();

/**
 * @swagger
 * /nutrition-advices:
 *   get:
 *     summary: Liste tous les avis nutritionnels
 *     tags: [Nutrition Advices]
 *     responses:
 *       200:
 *         description: Liste des avis
*/
nutritionAdviceRoutes.get('/nutrition-advices', getAllAdvices);

/**
 * @swagger
 * /nutrition-advices/{id}:
 *   get:
 *     summary: Récupère un avis par ID
 *     tags: [Nutrition Advices]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l'avis
 *     responses:
 *       200:
 *         description: Avis trouvé
 *       404:
 *         description: Avis non trouvé
 */
nutritionAdviceRoutes.get('/nutrition-advices/:id', getAdviceById);

/**
 * @swagger
 * /nutrition-advices:
 *   post:
 *     summary: Crée un nouvel avis
 *     tags: [Nutrition Advices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NutritionAdvice'
 *     responses:
 *       201:
 *         description: Avis créé
 */
nutritionAdviceRoutes.post('/nutrition-advices', createAdvice);

/**
 * @swagger
 * /nutrition-advices/{id}:
 *   put:
 *     summary: Met à jour un avis
 *     tags: [Nutrition Advices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NutritionAdvice'
 *     responses:
 *       200:
 *         description: Avis mis à jour
 */
nutritionAdviceRoutes.put('/nutrition-advices/:id', updateAdvice);

/**
 * @swagger
 * /api/nutrition-advices/{id}:
 *   delete:
 *     summary: Supprime un avis
 *     tags: [Nutrition Advices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 */
nutritionAdviceRoutes.delete('/nutrition-advices/:id', deleteAdvice);

export default nutritionAdviceRoutes;
