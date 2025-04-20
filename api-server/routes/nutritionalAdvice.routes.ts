import { Router } from 'express';
import { validate } from '@/middlewares/validate.js';
import errorHandler from '@/middlewares/errorHandler.js';

import { 
  nutritionalAdviceSchema,
  idParamNutritionalAdviceSchema
} from '@/schemas/validation/nutritionalAdvice.schema.js';

import {
  createNutritionalAdvice,
  getAllNutritionalAdvices,
  getNutritionalAdviceById,
  updateNutritionalAdvice,
  deleteNutritionalAdvice,
} from '@/controllers/index.controller.js';

const nutritionalAdviceRouter = Router();

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
nutritionalAdviceRouter.post('/nutrition-advices', validate(nutritionalAdviceSchema), errorHandler, createNutritionalAdvice);

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
nutritionalAdviceRouter.get('/nutrition-advices', errorHandler, getAllNutritionalAdvices);

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
 *           type: string
 *           required: true
 *           format: cuid
 *         description: ID de l'avis
 *     responses:
 *       200:
 *         description: Avis trouvé
 *       404:
 *         description: Avis non trouvé
 */
nutritionalAdviceRouter.get('/nutrition-advices/:id', validate(idParamNutritionalAdviceSchema, 'params'), errorHandler, getNutritionalAdviceById);

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
 *           type: string
 *           format: cuid
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
nutritionalAdviceRouter.put('/nutrition-advices/:id', validate(idParamNutritionalAdviceSchema, 'params'), errorHandler, updateNutritionalAdvice);

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
 *           type: string
 *           format: cuid
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 */
nutritionalAdviceRouter.delete('/nutrition-advices/:id', validate(idParamNutritionalAdviceSchema, 'params'), errorHandler, deleteNutritionalAdvice);

export default nutritionalAdviceRouter;
