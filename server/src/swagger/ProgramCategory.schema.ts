/**
 * @swagger
 * components:
 *   schemas:
 *     ProgramCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie de programme
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie de programme
 *           example: "Programme de remise en forme"
 *         description:
 *           type: string
 *           description: Description de la catégorie de programme
 *           example: "Catégorie pour les programmes de remise en forme"
 *         exerciseProgramId:
 *           type: string
 *           description: Identifiant du programme d'exercice associé
 *           example: "prog001"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie de programme
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie de programme
 *           example: "2025-04-16T14:48:00.000Z"
 *         cognitiveExercise:
 *           type: array
 *           description: Liste des exercices cognitifs associés à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/CognitiveExercise'
 *         exerciseProgram:
 *           $ref: '#/components/schemas/ExerciseProgram'
 *           description: Programme d'exercice associé
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Programme de remise en forme"
 *         description: "Catégorie pour les programmes de remise en forme"
 *         exerciseProgramId: "prog001"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         cognitiveExercise: []
 *         exerciseProgram: {}
 */
