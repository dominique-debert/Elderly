/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceCompleted:
 *       type: object
 *       required:
 *         - requestId
 *         - helperId
 *         - completion_date
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         requestId:
 *           type: string
 *         helperId:
 *           type: string
 *         completion_date:
 *           type: string
 *           format: date-time
 *         actual_duration:
 *           type: integer
 *         creator_comment:
 *           type: string
 *         helper_comment:
 *           type: string
 *         creator_rating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         helper_rating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         points_exchanged:
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
 *         completion_date: "2025-04-15T10:30:00Z"
 *         actual_duration: 120
 *         creator_comment: "Très bonne expérience."
 *         helper_comment: "L'aide a été bien reçue."
 *         creator_rating: 5
 *         helper_rating: 4
 *         points_exchanged: 10
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 *     createServiceCompleted:
 *       type: object
 *       required:
 *         - requestId
 *         - helperId
 *         - completion_date
 *       properties:
 *         requestId:
 *           type: string
 *         helperId:
 *           type: string
 *         completion_date:
 *           type: string
 *           format: date-time
 *         actual_duration:
 *           type: integer
 *         creator_comment:
 *           type: string
 *         helper_comment:
 *           type: string
 *         creator_rating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         helper_rating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         points_exchanged:
 *           type: integer
 *       example:
 *         requestId: "req002"
 *         helperId: "helper456"
 *         completion_date: "2025-04-15T11:00:00Z"
 *         actual_duration: 90
 *         creator_comment: "Aide rapide et efficace."
 *         helper_comment: "Bonne communication."
 *         creator_rating: 4
 *         helper_rating: 5
 *         points_exchanged: 15
 *     updateServiceCompleted:
 *       type: object
 *       properties:
 *         requestId:
 *           type: string
 *         helperId:
 *           type: string
 *         completion_date:
 *           type: string
 *           format: date-time
 *         actual_duration:
 *           type: integer
 *         creator_comment:
 *           type: string
 *         helper_comment:
 *           type: string
 *         creator_rating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         helper_rating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         points_exchanged:
 *           type: integer
 *       example:
 *         requestId: "req002"
 *         helperId: "helper456"
 *         completion_date: "2025-04-15T12:00:00Z"
 *         actual_duration: 100
 *         creator_comment: "Très satisfait de l'aide."
 *         helper_comment: "Merci pour l'opportunité."
 *         creator_rating: 5
 *         helper_rating: 5
 *         points_exchanged: 20
 */

export {};
