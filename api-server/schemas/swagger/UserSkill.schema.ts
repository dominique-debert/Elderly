/**
 * @swagger
 * components:
 *   schemas:
 *     userSkill:
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
 *         created_at:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "user123"
 *         skillId: "skill001"
 *         level: 5
 *         created_at: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 *     createUserSkill:
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
 *       example:
 *         userId: "user123"
 *         skillId: "skill002"
 *         level: 3
 *     updateUserSkill:
 *       type: object
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
 *       example:
 *         userId: "user123"
 *         skillId: "skill003"
 *         level: 4
 */

export {};
