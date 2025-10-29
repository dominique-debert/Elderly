import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import { cognitiveExerciseSchema, idParamCognitiveExerciseSchema } from '../validators/cognitiveExercise.validator';
import { createCognitiveExercise, getAllCognitiveExercises, getCognitiveExerciseById, updateCognitiveExercise, deleteCognitiveExercise } from '@/controllers/index.controller';
const router = Router();
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
router.post('/', validate(cognitiveExerciseSchema), createCognitiveExercise);
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
router.get('/', getAllCognitiveExercises);
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
 *           format: cuid
 *         description: ID de l'exercice à récupérer
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
router.get('/:id', validate(idParamCognitiveExerciseSchema, 'params'), getCognitiveExerciseById);
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
 *           format: cuid
 *         description: ID de l'exercice à mettre à jour
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
router.put('/:id', validate(idParamCognitiveExerciseSchema, 'params'), updateCognitiveExercise);
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
 *           format: cuid
 *         description: ID de l'exercice à supprimer
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 *       404:
 *         description: Exercice non trouvé
 */
router.delete('/:id', validate(idParamCognitiveExerciseSchema, 'params'), deleteCognitiveExercise);
export default router;
