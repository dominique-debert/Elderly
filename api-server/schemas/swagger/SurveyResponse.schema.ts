/**
 * @swagger
 * components:
 *   schemas:
 *     SurveyResponse:
 *       type: object
 *       required:
 *         - surveyId
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         surveyId:
 *           type: string
 *         userId:
 *           type: string
 *         responses:
 *           type: object
 *           description: Les réponses à l'enquête (format JSON)
 *         response_date:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         surveyId: "survey001"
 *         userId: "user123"
 *         responses: {"question1": "Réponse A", "question2": "Réponse B"}
 *         response_date: "2025-04-16T12:00:00Z"
 *         createdAt: "2025-04-16T12:00:00Z"
 *         updatedAt: "2025-04-16T12:00:00Z"
 */

