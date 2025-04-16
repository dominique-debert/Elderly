/**
 * @swagger
 * components:
 *   schemas:
 *     trustCircle:
 *       type: object
 *       required:
 *         - userId
 *         - contactId
 *         - access_level
 *       properties:
 *         userId:
 *           type: string
 *         contactId:
 *           type: string
 *         dateAdded:
 *           type: string
 *           format: date
 *         access_level:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "clv2a8abc0001abc123def001"
 *         contactId: "clv2a8abc0001abc123def002"
 *         dateAdded: "2025-04-10"
 *         access_level: "admin"
 *         createdAt: "2025-04-10T10:00:00Z"
 *         updatedAt: "2025-04-10T10:00:00Z"
 *     createTrustCircle:
 *       type: object
 *       required:
 *         - userId
 *         - contactId
 *         - access_level
 *       properties:
 *         userId:
 *           type: string
 *         contactId:
 *           type: string
 *         dateAdded:
 *           type: string
 *           format: date
 *         access_level:
 *           type: string
 *       example:
 *         userId: "clv2a8abc0001abc123def001"
 *         contactId: "clv2a8abc0001abc123def002"
 *         dateAdded: "2025-04-10"
 *         access_level: "member"
 *     updateTrustCircle:
 *       type: object
 *       properties:
 *         dateAdded:
 *           type: string
 *           format: date
 *         access_level:
 *           type: string
 *       example:
 *         dateAdded: "2025-04-11"
 *         access_level: "admin"
 */

export {};
