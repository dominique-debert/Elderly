/**
 * @swagger
 * components:
 *   schemas:
 *     Notification:
 *       type: object
 *       required:
 *         - userId
 *         - type
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 50
 *         content:
 *           type: string
 *         read:
 *           type: boolean
 *         actionLink:
 *           type: string
 *           maxLength: 255
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def456"
 *         userId: "user123"
 *         type: "message"
 *         content: "Vous avez un nouveau message"
 *         read: false
 *         actionLink: "https://example.com/message/1"
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:00:00Z"
 *     createNotification:
 *       type: object
 *       required:
 *         - userId
 *         - type
 *         - content
 *       properties:
 *         userId:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 50
 *         content:
 *           type: string
 *         read:
 *           type: boolean
 *         actionLink:
 *           type: string
 *           maxLength: 255
 *       example:
 *         userId: "user123"
 *         type: "message"
 *         content: "Vous avez un nouveau message"
 *         read: false
 *         actionLink: "https://example.com/message/1"
 *     updateNotification:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 50
 *         content:
 *           type: string
 *         read:
 *           type: boolean
 *         actionLink:
 *           type: string
 *           maxLength: 255
 *       example:
 *         userId: "user123"
 *         type: "message"
 *         content: "Votre message a été mis à jour"
 *         read: true
 *         actionLink: "https://example.com/message/2"
 */
export {};
