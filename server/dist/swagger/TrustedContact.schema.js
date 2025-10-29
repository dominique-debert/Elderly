"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     TrustedContact:
 *       type: object
 *       required:
 *         - userId
 *         - lastName
 *         - firstName
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         lastName:
 *           type: string
 *           maxLength: 255
 *         firstName:
 *           type: string
 *           maxLength: 255
 *         email:
 *           type: string
 *           format: email
 *         phone:
 *           type: string
 *           maxLength: 20
 *         relationship:
 *           type: string
 *           maxLength: 50
 *         shareMedications:
 *           type: boolean
 *         shareHealthIndicators:
 *           type: boolean
 *         shareWellnessActivities:
 *           type: boolean
 *         emergencyAlerts:
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
 *         lastName: "Doe"
 *         firstName: "John"
 *         email: "john.doe@example.com"
 *         phone: "+1234567890"
 *         relationship: "Friend"
 *         shareMedications: true
 *         shareHealthIndicators: false
 *         shareWellnessActivities: true
 *         emergencyAlerts: true
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:00:00Z"
 */
