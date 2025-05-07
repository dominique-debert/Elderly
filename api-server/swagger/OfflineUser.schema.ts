/**
 * @swagger
 * components:
 *   schemas:
 *     OfflineUser:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *           format: cuid
 *         cachedData:
 *           type: object
 *           additionalProperties: true
 *         lastSync:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "clv2a8abc0001abc123def890"
 *         cachedData: {"preferences": {"theme": "dark", "notifications": true}}
 *         lastSync: "2025-04-15T08:00:00Z"
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 *     createOfflineUser:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *           format: cuid
 *         cachedData:
 *           type: object
 *           additionalProperties: true
 *         lastSync:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "clv2a8abc0001abc123def890"
 *         cachedData: {"preferences": {"theme": "dark", "notifications": true}}
 *         lastSync: "2025-04-15T08:00:00Z"
 *     updateOfflineUser:
 *       type: object
 *       properties:
 *         cachedData:
 *           type: object
 *           additionalProperties: true
 *         lastSync:
 *           type: string
 *           format: date-time
 *       example:
 *         cachedData: {"preferences": {"theme": "light", "notifications": false}}
 *         lastSync: "2025-04-16T10:00:00Z"
 */

export {};
