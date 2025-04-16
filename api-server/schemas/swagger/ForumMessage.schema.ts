/**
 * @swagger
 * components:
 *   schemas:
 *     ForumMessage:
 *       type: object
 *       required:
 *         - id
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
 *         
 *     createForumMessage:
 *       type: object
 *       required:
 *         - content
 *       properties:
 *         topicId:
 *           type: string
 *         authorId:
 *           type: string
 *         content:
 *           type: string
 *         solutionMessage:
 *           type: boolean
 *       example:
 *         topicId: "cltopic123"
 *         authorId: "cluser456"
 *         content: "Je pense que la solution pourrait être celle-ci..."
 *         solutionMessage: false
 *
 *     updateForumMessage:
 *       type: object
 *       properties:
 *         topicId:
 *           type: string
 *         authorId:
 *           type: string
 *         content:
 *           type: string
 *         solutionMessage:
 *           type: boolean
 *       example:
 *         content: "Mise à jour de la réponse avec plus de détails."
 *         solutionMessage: true
 */
