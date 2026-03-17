/**
 * @swagger
 * components:
 *   schemas:
 *     UserSkill:
 *       type: object
 *       required:
 *         - userId
 *         - skillId
 *       properties:
 *         userId:
 *           type: string
 *           description: ID de l'utilisateur
 *         skillId:
 *           type: string
 *           description: ID de la compétence
 *         level:
 *           type: integer
 *           description: Niveau de compétence
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "user123"
 *         skillId: "skill001"
 *         level: 5
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 */

