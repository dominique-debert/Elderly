// routes/exerciseProgram.routes.js
import { Router } from 'express';
import {
  getAllExercisePrograms,
  getExerciseProgramById,
  createExerciseProgram,
  updateExerciseProgram,
  deleteExerciseProgram
} from '../controllers/exerciseProgram.controller.js';

const exerciseProgramRoutes = Router();

/**
 * @swagger
 * /api/exercise-programs:
 *   get:
 *     summary: Get all exercise programs
 *     tags: [Exercise program]
 *     responses:
 *       200:
 *         description: List of exercise programs
 */
exerciseProgramRoutes.get('/', getAllExercisePrograms);

/**
 * @swagger
 * /api/exercise-programs/{id}:
 *   get:
 *     summary: Get a single exercise program by ID
 *     tags: [Exercise program]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Exercise program found
 *       404:
 *         description: Exercise program not found
 */
exerciseProgramRoutes.get('/:id', getExerciseProgramById);

/**
 * @swagger
 * /api/exercise-programs:
 *   post:
 *     summary: Create a new exercise program
 *     tags: [Exercise program]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExerciseProgram'
 *     responses:
 *       201:
 *         description: Exercise program created
 */
exerciseProgramRoutes.post('/', createExerciseProgram);

/**
 * @swagger
 * /api/exercise-programs/{id}:
 *   put:
 *     summary: Update an exercise program
 *     tags: [Exercise program]
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
 *             $ref: '#/components/schemas/ExerciseProgram'
 *     responses:
 *       200:
 *         description: Exercise program updated
 *       404:
 *         description: Exercise program not found
 */
exerciseProgramRoutes.put('/:id', updateExerciseProgram);

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
 *           type: integer
 *     responses:
 *       204:
 *         description: Successfully deleted
 *       404:
 *         description: Exercise program not found
 */
exerciseProgramRoutes.delete('/:id', deleteExerciseProgram);

export default exerciseProgramRoutes;
