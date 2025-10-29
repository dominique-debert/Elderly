"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     trustCircle:
 *       type: object
 *       required:
 *         - userId
 *         - contactId
 *         - accessLevel
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         contactId:
 *           type: string
 *         dateAdded:
 *           type: string
 *           format: date-time
 *         accessLevel:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def001"
 *         userId: "user123"
 *         contactId: "contact123"
 *         dateAdded: "2025-04-10T10:00:00Z"
 *         accessLevel: "admin"
 *         createdAt: "2025-04-10T10:00:00Z"
 *         updatedAt: "2025-04-10T10:00:00Z"
 */
