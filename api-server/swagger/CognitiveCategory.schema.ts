/**
 * @swagger
 * components:
 *   schemas:
 *     CognitiveCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie cognitive
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie cognitive
 *           example: "Mémoire"
 *         description:
 *           type: string
 *           description: Description de la catégorie cognitive
 *           example: "Catégorie pour les exercices de mémoire"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie cognitive
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie cognitive
 *           example: "2025-04-16T14:48:00.000Z"
 *         cognitiveExercise:
 *           type: array
 *           description: Liste des exercices cognitifs associés à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/CognitiveExercise'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Mémoire"
 *         description: "Catégorie pour les exercices de mémoire"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         cognitiveExercise: []
 */
