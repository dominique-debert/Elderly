/**
 * @swagger
 * components:
 *   schemas:
 *     VideoCall:
 *       type: object
 *       required:
 *         - conversationId
 *         - initiatorId
 *         - startDate
 *         - endDate
 *         - status
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         conversationId:
 *           type: string
 *         initiatorId:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date-time
 *         endDate:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           maxLength: 50
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def456"
 *         conversationId: "conv1234"
 *         initiatorId: "user5678"
 *         startDate: "2025-04-16T10:00:00Z"
 *         endDate: "2025-04-16T10:30:00Z"
 *         status: "completed"
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:30:00Z"
 */
