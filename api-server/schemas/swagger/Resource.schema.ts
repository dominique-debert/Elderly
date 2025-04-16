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
 *           type: string
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
 *         categoryId: "cat001"
 *         authorId: "auth001"
 *         adminValidated: true
 *         createdAt: "2025-04-15T09:00:00Z"
 *         updatedAt: "2025-04-15T09:00:00Z"
 *     createResource:
 *       type: object
 *       required:
 *         - title
 *         - categoryId
 *         - authorId
 *       properties:
 *         title:
 *           type: string
 *           maxLength: 255
 *         content:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 100
 *         categoryId:
 *           type: string
 *         authorId:
 *           type: string
 *         adminValidated:
 *           type: boolean
 *       example:
 *         title: "Premiers pas avec Express"
 *         content: "Un tutoriel pour débutants sur Express.js"
 *         type: "tutorial"
 *         categoryId: "cat002"
 *         authorId: "auth002"
 *         adminValidated: false
 *     updateResource:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           maxLength: 255
 *         content:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 100
 *         categoryId:
 *           type: string
 *         authorId:
 *           type: string
 *         adminValidated:
 *           type: boolean
 *       example:
 *         title: "Introduction à React.js"
 *         content: "Une présentation des concepts de base de React"
 *         type: "article"
 *         categoryId: "cat003"
 *         authorId: "auth003"
 *         adminValidated: true
 */

export {};
