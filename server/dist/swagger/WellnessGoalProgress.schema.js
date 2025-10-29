/**
 * @swagger
 * components:
 *   schemas:
 *     wellnessGoalProgress:
 *       type: object
 *       required:
 *         - goalId
 *         - recordingDate
 *         - achievedValue
 *         - goalAchieved
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         goalId:
 *           type: string
 *         recordingDate:
 *           type: string
 *           format: date
 *         achievedValue:
 *           type: integer
 *         goalAchieved:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def123"
 *         goalId: "goal123"
 *         recordingDate: "2025-04-15"
 *         achievedValue: 75
 *         goalAchieved: true
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 *     createWellnessGoalProgress:
 *       type: object
 *       required:
 *         - goalId
 *         - recordingDate
 *         - achievedValue
 *         - goalAchieved
 *       properties:
 *         goalId:
 *           type: string
 *         recordingDate:
 *           type: string
 *           format: date
 *         achievedValue:
 *           type: integer
 *         goalAchieved:
 *           type: boolean
 *       example:
 *         goalId: "goal123"
 *         recordingDate: "2025-04-15"
 *         achievedValue: 75
 *         goalAchieved: true
 *     updateWellnessGoalProgress:
 *       type: object
 *       properties:
 *         goalId:
 *           type: string
 *         recordingDate:
 *           type: string
 *           format: date
 *         achievedValue:
 *           type: integer
 *         goalAchieved:
 *           type: boolean
 *       example:
 *         goalId: "goal123"
 *         recordingDate: "2025-04-16"
 *         achievedValue: 80
 *         goalAchieved: true
 */
export {};
