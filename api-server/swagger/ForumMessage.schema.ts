/**
 * @swagger
 * components:
 *   schemas:
 *     ForumMessage:
 *       type: object
 *       required:
 *         - id
 *         - topicId
 *         - authorId
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         topicId:
 *           type: string
 *           nullable: true
 *         authorId:
 *           type: string
 *           nullable: true
 *         content:
 *           type: string
 *           nullable: true
 *         creationDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         modificationDate:
 *           type: string
 *           format: date-time
 *           nullable: true
 *         solutionMessage:
 *           type: boolean
 *           nullable: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *       example:
 *         id: "clv3abcde0001abc456def123"
 *         topicId: "cltopic123"
 *         authorId: "cluser456"
 *         content: "Voici une réponse détaillée à votre question."
 *         creationDate: "2025-04-15T09:30:00Z"
 *         modificationDate: "2025-04-16T12:00:00Z"
 *         solutionMessage: true
 *         createdAt: "2025-04-15T09:30:00Z"
 *         updatedAt: "2025-04-16T12:00:00Z"
  */
