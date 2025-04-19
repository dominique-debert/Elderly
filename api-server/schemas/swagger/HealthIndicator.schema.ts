/**
 * @swagger
 * components:
 *   schemas:
 *     HealthIndicator:
 *       type: object
 *       required:
 *         - recordingDate
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *           format: cuid
 *         recordingDate:
 *           type: string
 *           format: date-time
 *         stepCount:
 *           type: integer
 *         sleepDurationMinutes:
 *           type: integer
 *         sleepQuality:
 *           type: integer
 *         weight:
 *           type: number
 *           format: float
 *         mood:
 *           type: string
 *           maxLength: 10
 *         notes:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv3abc000001xyz098vbn"
 *         userId: "clu1xyz000001def456abc"
 *         recordingDate: "2025-04-15"
 *         stepCount: 8500
 *         sleepDurationMinutes: 420
 *         sleepQuality: 8
 *         weight: 72.5
 *         mood: "good"
 *         notes: "Bonne journée dans l’ensemble"
 *         createdAt: "2025-04-15T10:15:00Z"
 *         updatedAt: "2025-04-15T12:00:00Z"
 */

