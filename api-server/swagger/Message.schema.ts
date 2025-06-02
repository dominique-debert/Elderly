/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       required:
 *         - conversationId
 *         - senderId
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         conversationId:
 *           type: string
 *         senderId:
 *           type: string
 *         content:
 *           type: string
 *         sendDate:
 *           type: string
 *           format: date-time
 *         type:
 *           type: string
 *           maxLength: 50
 *         read:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def123"
 *         conversationId: "conv123"
 *         senderId: "user456"
 *         content: "Hey, comment ça va ?"
 *         sendDate: "2025-04-16T12:00:00Z"
 *         type: "text"
 *         read: false
 *         createdAt: "2025-04-16T12:00:00Z"
 *         updatedAt: "2025-04-16T12:00:00Z"
 *     createMessage:
 *       type: object
 *       required:
 *         - conversationId
 *         - senderId
 *         - content
 *       properties:
 *         conversationId:
 *           type: string
 *         senderId:
 *           type: string
 *         content:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 50
 *         read:
 *           type: boolean
 *       example:
 *         conversationId: "conv123"
 *         senderId: "user456"
 *         content: "Hey, comment ça va ?"
 *         type: "text"
 *         read: false
 *     updateMessage:
 *       type: object
 *       properties:
 *         content:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 50
 *         read:
 *           type: boolean
 *       example:
 *         content: "Comment vas-tu ?"
 *         type: "text"
 *         read: true
 */

export {};
