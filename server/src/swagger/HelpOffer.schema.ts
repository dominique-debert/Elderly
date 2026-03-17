/**
 * @swagger
 * components:
 *   schemas:
 *     HelpOffer:
 *       type: object
 *       required:
 *         - requestId
 *         - helperId
 *         - offerDate
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         requestId:
 *           type: string
 *         helperId:
 *           type: string
 *         offerDate:
 *           type: string
 *           format: date-time
 *         message:
 *           type: string
 *         status:
 *           type: string
 *           maxLength: 50
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8xyz0001xyz987zyx456"
 *         requestId: "clv1req0001abc987123def"
 *         helperId: "clv1usr0002bcd654321abc"
 *         offerDate: "2025-04-16T10:30:00Z"
 *         message: "Je peux venir t'aider vers 15h."
 *         status: "pending"
 *         createdAt: "2025-04-16T10:30:00Z"
 *         updatedAt: "2025-04-16T10:30:00Z"
 * 
 *     createHelpOffer:
 *       type: object
 *       required:
 *         - requestId
 *         - helperId
 *         - offerDate
 *       properties:
 *         requestId:
 *           type: string
 *         helperId:
 *           type: string
 *         offerDate:
 *           type: string
 *           format: date-time
 *         message:
 *           type: string
 *         status:
 *           type: string
 *           maxLength: 50
 *       example:
 *         requestId: "clv1req0001abc987123def"
 *         helperId: "clv1usr0002bcd654321abc"
 *         offerDate: "2025-04-16T10:30:00Z"
 *         message: "Je peux venir aider vers 15h."
 *         status: "pending"
 * 
 *     updateHelpOffer:
 *       type: object
 *       properties:
 *         requestId:
 *           type: string
 *         helperId:
 *           type: string
 *         offerDate:
 *           type: string
 *           format: date-time
 *         message:
 *           type: string
 *         status:
 *           type: string
 *           maxLength: 50
 *       example:
 *         message: "Finalement dispo vers 16h plutôt"
 *         status: "confirmed"
 */

export {};
