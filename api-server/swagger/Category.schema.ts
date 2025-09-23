/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Mémoire"
 *         description:
 *           type: string
 *           example: "Exercices pour améliorer la mémoire à court et long terme."
 *         typeId:
 *           type: integer
 *           example: 2
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-04-28T14:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           nullable: true
 *           example: "2025-04-29T10:00:00Z"
 *       required:
 *         - id
 *         - name
 *         - typeId
 *         - createdAt
 */
