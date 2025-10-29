"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceRating:
 *       type: object
 *       required:
 *         - serviceId
 *         - userId
 *         - rating
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         serviceId:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *           format: cuid
 *         rating:
 *           type: integer
 *         comment:
 *           type: string
 *         ratingDate:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def789"
 *         serviceId: "srv001"
 *         userId: "usr001"
 *         rating: 4
 *         comment: "Très bonne expérience, mais pourrait être amélioré."
 *         ratingDate: "2025-04-16T10:00:00Z"
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:00:00Z"
 */
