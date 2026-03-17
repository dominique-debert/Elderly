/**
 * @swagger
 * components:
 *   schemas:
 *     ProjectTask:
 *       type: object
 *       required:
 *         - title
 *         - projectId
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         projectId:
 *           type: string
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *           maxLength: 255
 *         creationDate:
 *           type: string
 *           format: date-time
 *         dueDate:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           maxLength: 50
 *         assigneeId:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def123"
 *         projectId: "proj001"
 *         title: "Develop Feature A"
 *         description: "This task involves developing feature A"
 *         creationDate: "2025-04-16T10:00:00Z"
 *         dueDate: "2025-04-20T10:00:00Z"
 *         status: "In Progress"
 *         assigneeId: "user001"
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:00:00Z"
*/

