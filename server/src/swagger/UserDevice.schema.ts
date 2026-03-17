/**
 * @swagger
 * components:
 *   schemas:
 *     UserDevice:
 *       type: object
 *       required:
 *         - userId
 *         - deviceType
 *         - notificationToken
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         deviceType:
 *           type: string
 *         deviceName:
 *           type: string
 *         operatingSystem:
 *           type: string
 *         notificationToken:
 *           type: string
 *         lastConnection:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def456"
 *         userId: "user123"
 *         deviceType: "mobile"
 *         deviceName: "iPhone 12"
 *         operatingSystem: "iOS 14"
 *         notificationToken: "abc123xyz456"
 *         lastConnection: "2025-04-16T10:00:00Z"
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:00:00Z"
 */

