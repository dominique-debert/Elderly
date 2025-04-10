/**
 * @swagger
 * components:
 *   schemas:
 *     CognitiveExercise:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - difficulty_level
 *         - duration_minutes
 *       properties:
 *         id:
 *           type: integer
 *           description: ID auto-incrémenté
 *         name:
 *           type: string
 *           maxLength: 255
 *         category:
 *           type: string
 *           enum: [memory, attention, logic, language]
 *         difficulty_level:
 *           type: string
 *           enum: [beginner, intermediate, advanced]
 *         duration_minutes:
 *           type: integer
 *         description:
 *           type: string
 *         image:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *       example:
 *         name: Memory Match
 *         category: memory
 *         difficulty_level: beginner
 *         duration_minutes: 15
 *         description: Jeu de mémoire pour tester la concentration
 *         image: memory.png
 */
