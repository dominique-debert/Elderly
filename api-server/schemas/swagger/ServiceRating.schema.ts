/**
 * @swagger
 * components:
 *   schemas:
 *     serviceRating:
 *       type: object
 *       required:
 *         - serviceId
 *         - userId
 *       properties:
 *         serviceId:
 *           type: string
 *         userId:
 *           type: string
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
 *         serviceId: "srv001"
 *         userId: "usr001"
 *         rating: 4
 *         comment: "Très bonne expérience, mais pourrait être amélioré."
 *         ratingDate: "2025-04-16T10:00:00Z"
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:00:00Z"
 *     createServiceRating:
 *       type: object
 *       required:
 *         - serviceId
 *         - userId
 *       properties:
 *         serviceId:
 *           type: string
 *         userId:
 *           type: string
 *         rating:
 *           type: integer
 *         comment:
 *           type: string
 *         ratingDate:
 *           type: string
 *           format: date-time
 *       example:
 *         serviceId: "srv001"
 *         userId: "usr001"
 *         rating: 5
 *         comment: "Excellente qualité de service !"
 *         ratingDate: "2025-04-16T10:00:00Z"
 *     updateServiceRating:
 *       type: object
 *       properties:
 *         serviceId:
 *           type: string
 *         userId:
 *           type: string
 *         rating:
 *           type: integer
 *         comment:
 *           type: string
 *         ratingDate:
 *           type: string
 *           format: date-time
 *       example:
 *         serviceId: "srv001"
 *         userId: "usr001"
 *         rating: 3
 *         comment: "Service bon, mais l'attente était longue."
 *         ratingDate: "2025-04-16T10:00:00Z"
 */

export {};
