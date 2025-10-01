/**
 * @swagger
 * components:
 *   schemas:
 *     Resource:
 *       type: object
 *       required:
 *         - title
 *         - categoryId
 *         - authorId
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         title:
 *           type: string
 *           maxLength: 255
 *         content:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 100
 *         categoryId:
 *           type: integer
 *         authorId:
 *           type: string
 *         adminValidated:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def123"
 *         title: "Introduction à Node.js"
 *         content: "Un article détaillant les bases de Node.js"
 *         type: "article"
 *         categoryId: 1
 *         authorId: "auth001"
 *         adminValidated: true
 *         createdAt: "2025-04-15T09:00:00Z"
 *         updatedAt: "2025-04-15T09:00:00Z"
 */
