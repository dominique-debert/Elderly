/**
 * @swagger
 * components:
 *   schemas:
 *     projectMember:
 *       type: object
 *       required:
 *         - projectId
 *         - userId
 *         - role
 *         - join_date
 *       properties:
 *         projectId:
 *           type: string
 *         userId:
 *           type: string
 *         role:
 *           type: string
 *           maxLength: 100
 *         join_date:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         projectId: "proj001"
 *         userId: "user123"
 *         role: "Developer"
 *         join_date: "2025-04-01T08:00:00Z"
 *         createdAt: "2025-04-01T08:00:00Z"
 *         updatedAt: "2025-04-01T08:00:00Z"
  */

export {};
