/**
 * @swagger
 * components:
 *   schemas:
 *     UserBadge:
 *       type: object
 *       required:
 *         - userId
 *         - badgeId
 *       properties:
 *         userId:
 *           type: string
 *           format: cuid
 *         badgeId:
 *           type: string
 *           format: cuid
 *         achievementDate:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "clv2a8abc0001abc123def456"
 *         badgeId: "clv2a8abc0001abc123def789"
 *         achievementDate: "2025-04-10T14:30:00Z"
 *         createdAt: "2025-04-10T14:30:00Z"
 *         updatedAt: "2025-04-10T14:30:00Z"
 */

