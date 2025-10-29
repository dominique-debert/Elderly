"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     wellnessGoal:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - categoryId
 *         - targetValue
 *         - unit
 *         - frequency
 *         - startDate
 *         - endDate
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         title:
 *           type: string
 *           maxLength: 255
 *         categoryId:
 *           type: integer
 *         targetValue:
 *           type: integer
 *         unit:
 *           type: string
 *           maxLength: 50
 *         frequency:
 *           type: string
 *           maxLength: 50
 *         startDate:
 *           type: string
 *           format: date
 *         endDate:
 *           type: string
 *           format: date
 *         active:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def456"
 *         userId: "user123"
 *         title: "Atteindre 10 000 pas par jour"
 *         categoryId: 1
 *         targetValue: 10000
 *         unit: "steps"
 *         frequency: "daily"
 *         startDate: "2025-05-01"
 *         endDate: "2025-06-01"
 *         active: true
 *         createdAt: "2025-04-16T08:00:00Z"
 *         updatedAt: "2025-04-16T08:00:00Z"
 */
