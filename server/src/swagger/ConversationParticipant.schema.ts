/**
 * @swagger
 * components:
 *   schemas:
 *     ConversationParticipant:
 *       type: object
 *       required:
 *         - conversationId
 *         - userId
 *         - lastAccess
 *         - createdAt
 *       properties:
 *         conversationId:
 *           type: string
 *         userId:
 *           type: string
 *         dateAdded:
 *           type: string
 *           format: date-time
 *         administrator:
 *           type: boolean
 *         lastAccess:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         conversationId: "clv2c45def001xyz456ghi789"
 *         userId: "clu123abc001xyz456def789"
 *         dateAdded: "2025-04-15T12:00:00Z"
 *         administrator: true
 *         lastAccess: "2025-04-16T10:30:00Z"
 *         createdAt: "2025-04-15T12:00:00Z"
 *         updatedAt: "2025-04-16T11:00:00Z"
*/
