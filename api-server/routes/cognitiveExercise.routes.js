import express from 'express';
import {
  createExercise,
  getAllExercises,
  getExerciseById,
  updateExercise,
  deleteExercise
} from '../controllers/cognitiveExercise.controller.js';

const router = express.Router();

/**
 * @swagger
 * /api/cognitive-exercises:
 *   get:
 *     summary: Récupère la liste de tous les exercices cognitifs
 *     tags: [Cognitive exercises]
 *     responses:
 *       200:
 *         description: Liste des exercices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CognitiveExercise'
 */
router.get('/', getAllExercises);

/**
 * @swagger
 * /api/cognitive-exercises/{id}:
 *   get:
 *     summary: Récupère un exercice par son ID
 *     tags: [Cognitive exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Exercice trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CognitiveExercise'
 *       404:
 *         description: Exercice non trouvé
 */
router.get('/:id', getExerciseById);

/**
 * @swagger
 * /api/cognitive-exercises:
 *   post:
 *     summary: Crée un nouvel exercice cognitif
 *     tags: [Cognitive exercises]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CognitiveExercise'
 *     responses:
 *       201:
 *         description: Exercice créé
 */
router.post('/', createExercise);

/**
 * @swagger
 * /api/cognitive-exercises/{id}:
 *   put:
 *     summary: Met à jour un exercice existant
 *     tags: [Cognitive exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CognitiveExercise'
 *     responses:
 *       200:
 *         description: Exercice mis à jour
 *       404:
 *         description: Exercice non trouvé
 */
router.put('/:id', updateExercise);

/**
 * @swagger
 * /api/cognitive-exercises/{id}:
 *   delete:
 *     summary: Supprime un exercice
 *     tags: [Cognitive exercises]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 *       404:
 *         description: Exercice non trouvé
 */
router.delete('/:id', deleteExercise);

export default router;
