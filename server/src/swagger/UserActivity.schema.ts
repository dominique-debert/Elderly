/**
 * @swagger
 * components:
 *   schemas:
 *     UserActivity:
 *       type: object
 *       required:
 *         - userId
 *         - completionDate
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         completionDate:
 *           type: string
 *           format: date
 *         exerciseProgramId:
 *           type: string
 *         cognitiveExerciseId:
 *           type: string
 *         durationMinutes:
 *           type: integer
 *         perceivedDifficultyLevel:
 *           type: integer
 *         enjoymentLevel:
 *           type: integer
 *         comment:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def123"
 *         userId: "user123"
 *         completionDate: "2025-04-15"
 *         exerciseProgramId: "program123"
 *         cognitiveExerciseId: "cognitive123"
 *         durationMinutes: 30
 *         perceivedDifficultyLevel: 4
 *         enjoymentLevel: 5
 *         comment: "Exercice agréable mais difficile"
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 */

