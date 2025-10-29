"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     CognitiveExercise:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - difficultyLevel
 *         - durationMinutes
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de l'exercice cognitif (UUID)
 *         name:
 *           type: string
 *           maxLength: 255
 *         category:
 *           type: string
 *           enum: [memory, attention, logic, language]
 *         difficultyLevel:
 *           type: string
 *           enum: [beginner, intermediate, advanced]
 *         durationMinutes:
 *           type: integer
 *         description:
 *           type: string
 *         image:
 *           type: string
 *       example:
 *         name: Memory Match
 *         category: memory
 *         difficultyLevel: beginner
 *         durationMinutes: 15
 *         description: Jeu de mémoire pour tester la concentration
 *         image: memory.png
 */
