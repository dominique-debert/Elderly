/**
 * @swagger
 * components:
 *   schemas:
 *     UrbanIssueReport:
 *       type: object
 *       required:
 *         - userId
 *         - categoryId
 *         - description
 *         - address
 *         - reportDate
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         categoryId:
 *           type: integer
 *         description:
 *           type: string
 *         address:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         reportDate:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           maxLength: 255
 *         cityReference:
 *           type: string
 *           maxLength: 255
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def789"
 *         userId: "usr123"
 *         categoryId: 1
 *         description: "Problème de chaussée défectueuse"
 *         address: "123 Rue Principale"
 *         gpsCoordinates: "48.8566, 2.3522"
 *         reportDate: "2025-04-15T08:00:00Z"
 *         status: "open"
 *         cityReference: "Paris_123"
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 *     createUrbanIssueReport:
 *       type: object
 *       required:
 *         - userId
 *         - categoryId
 *         - description
 *         - address
 *         - reportDate
 *       properties:
 *         userId:
 *           type: string
 *         categoryId:
 *           type: integer
 *         description:
 *           type: string
 *         address:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         reportDate:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           maxLength: 255
 *         cityReference:
 *           type: string
 *           maxLength: 255
 *       example:
 *         userId: "usr123"
 *         categoryId: 1
 *         description: "Problème de chaussée défectueuse"
 *         address: "123 Rue Principale"
 *         gpsCoordinates: "48.8566, 2.3522"
 *         reportDate: "2025-04-15T08:00:00Z"
 *         status: "open"
 *         cityReference: "Paris_123"
 *     updateUrbanIssueReport:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *         categoryId:
 *           type: integer
 *         description:
 *           type: string
 *         address:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         reportDate:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           maxLength: 255
 *         cityReference:
 *           type: string
 *           maxLength: 255
 *       example:
 *         userId: "usr456"
 *         categoryId: 2
 *         description: "Problème d'éclairage public défectueux"
 *         address: "456 Avenue des Champs"
 *         gpsCoordinates: "48.8606, 2.3276"
 *         reportDate: "2025-04-16T09:00:00Z"
 *         status: "in_progress"
 *         cityReference: "Paris_456"
 */
export {};
