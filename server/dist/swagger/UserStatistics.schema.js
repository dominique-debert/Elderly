/**
 * @swagger
 * components:
 *   schemas:
 *     UserStatistics:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *           format: cuid
 *         servicesProvided:
 *           type: integer
 *         servicesReceived:
 *           type: integer
 *         activitiesParticipated:
 *           type: integer
 *         activitiesOrganized:
 *           type: integer
 *         forumMessages:
 *           type: integer
 *         totalHelpPoints:
 *           type: integer
 *         networkSize:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         userId: "clv2a8abc0001abc123def456"
 *         servicesProvided: 10
 *         servicesReceived: 5
 *         activitiesParticipated: 3
 *         activitiesOrganized: 2
 *         forumMessages: 50
 *         totalHelpPoints: 150
 *         networkSize: 25
 *         createdAt: "2025-04-16T09:30:00Z"
 *         updatedAt: "2025-04-16T09:30:00Z"
 */
export {};
