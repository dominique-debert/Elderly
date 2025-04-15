import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import errorHandler from '@/middlewares/errorHandler';

import {
  exerciseProgramSchema,
  idParamExerciseProgramSchema
} from '@/schemas/validation/exerciseProgram.schema';

import {
  getAllExercisePrograms,
  getExerciseProgramById,
  createExerciseProgram,
  updateExerciseProgram,
  deleteExerciseProgram
} from '@/controllers/exerciseProgram.controller';

const exerciseProgramRouter = Router();

/**
 * @swagger
 * /api/exercise-programs:
 *   post:
 *     summary: Créer un nouveau programme d'exercice
 *     tags: [Exercise program]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExerciseProgram'
 *     responses:
 *       201:
 *         description: Programme d'exercice créé
 */
exerciseProgramRouter.post('/', validate(exerciseProgramSchema), errorHandler, createExerciseProgram);

/**
 * @swagger
 * /api/exercise-programs:
 *   get:
 *     summary: Récupérer tous les programmes d'exercice
 *     tags: [Exercise program]
 *     responses:
 *       200:
 *         description: Liste des programmes d'exercice
 */
exerciseProgramRouter.get('/', errorHandler, getAllExercisePrograms);

/**
 * @swagger
 * /api/exercise-programs/{id}:
 *   get:
 *     summary: Récupérer un programme d'exercice par son ID
 *     tags: [Exercise program]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID du programme d'exercice à récupérer
 *         schema:
 *           type: string
 *           format: cuid
 *     responses:
 *       200:
 *         description: Programme d'exercice trouvé
 *       404:
 *         description: Programme d'exercice non trouvé
 */
exerciseProgramRouter.get('/:id', validate(idParamExerciseProgramSchema, 'params'), errorHandler, getExerciseProgramById);

/**
 * @swagger
 * /api/exercise-programs/{id}:
 *   put:
 *     summary: Mettre à jour un programme d'exercice
 *     tags: [Exercise program]
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
 *             $ref: '#/components/schemas/ExerciseProgram'
 *     responses:
 *       200:
 *         description: Programme d'exercice mis à jour
 *       404:
 *         description: Programme d'exercice non trouvé
 */
exerciseProgramRouter.put('/:id', validate(idParamExerciseProgramSchema, 'params'), errorHandler, updateExerciseProgram);

/**
 * @swagger
 * /api/exercise-programs/{id}:
 *   delete:
 *     summary: Delete an exercise program
 *     tags: [Exercise program]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *     responses:
 *       204:
 *         description: Programme d'exercice supprimé
 *       404:
 *         description: Programme d'exercice non trouvé
 */
exerciseProgramRouter.delete('/:id', validate(idParamExerciseProgramSchema, 'params'), errorHandler, deleteExerciseProgram);

export default exerciseProgramRouter;