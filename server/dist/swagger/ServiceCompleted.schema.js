"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceCompleted:
 *       type: object
 *       required:
 *         - requestId
 *         - helperId
 *         - completionDate
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         requestId:
 *           type: string
 *         helperId:
 *           type: string
 *         completionDate:
 *           type: string
 *           format: date-time
 *         actualDuration:
 *           type: integer
 *         creatorComment:
 *           type: string
 *         helperComment:
 *           type: string
 *         creatorRating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         helperRating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         pointsExchanged:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def789"
 *         requestId: "req001"
 *         helperId: "helper123"
 *         completionDate: "2025-04-15T10:30:00Z"
 *         actualDuration: 120
 *         creatorComment: "Très bonne expérience."
 *         helperComment: "L'aide a été bien reçue."
 *         creatorRating: 5
 *         helperRating: 4
 *         pointsExchanged: 10
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 */
