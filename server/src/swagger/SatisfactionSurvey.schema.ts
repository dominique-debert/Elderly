/**
 * @swagger
 * components:
 *   schemas:
 *     SatisfactionSurvey:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *           maxLength: 255
 *         startDate:
 *           type: string
 *           format: date-time
 *         endDate:
 *           type: string
 *           format: date-time
 *         active:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def123"
 *         title: "Sondage de satisfaction 2025"
 *         description: "Évaluation de nos services pour 2025"
 *         startDate: "2025-06-01T00:00:00Z"
 *         endDate: "2025-06-30T23:59:59Z"
 *         active: true
 *         createdAt: "2025-04-16T09:00:00Z"
 *         updatedAt: "2025-04-16T09:00:00Z"
 */

