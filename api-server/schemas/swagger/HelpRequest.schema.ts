/**
 * @swagger
 * components:
 *   schemas:
 *     HelpRequest:
 *       type: object
 *       required:
 *         - creatorId
 *         - title
 *         - categoryId
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         creatorId:
 *           type: string
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *         creationDate:
 *           type: string
 *           format: date-time
 *         neededDate:
 *           type: string
 *           format: date-time
 *         estimatedDuration:
 *           type: integer
 *         location:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         categoryId:
 *           type: string
 *         recurring:
 *           type: boolean
 *         frequency:
 *           type: string
 *           maxLength: 50
 *         status:
 *           type: string
 *           maxLength: 50
 *         points_offered:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2b9xyz0001abc456ghi789"
 *         creatorId: "user123"
 *         title: "Besoin d'aide pour déménager"
 *         description: "Je cherche une personne pour m'aider à déménager ce week-end."
 *         creationDate: "2025-04-15T08:00:00Z"
 *         neededDate: "2025-04-20T09:00:00Z"
 *         estimatedDuration: 180
 *         location: "15 rue des Lilas, Paris"
 *         gpsCoordinates: "48.8566,2.3522"
 *         categoryId: "cat001"
 *         recurring: false
 *         frequency: null
 *         status: "Ouvert"
 *         points_offered: 50
 *         createdAt: "2025-04-15T08:00:00Z"
 *         updatedAt: "2025-04-15T08:00:00Z"
 * 
 *     createHelpRequest:
 *       type: object
 *       required:
 *         - creatorId
 *         - title
 *         - categoryId
 *       properties:
 *         creatorId:
 *           type: string
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *         neededDate:
 *           type: string
 *           format: date-time
 *         estimatedDuration:
 *           type: integer
 *         location:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         categoryId:
 *           type: string
 *         recurring:
 *           type: boolean
 *         frequency:
 *           type: string
 *           maxLength: 50
 *         status:
 *           type: string
 *           maxLength: 50
 *         points_offered:
 *           type: integer
 *       example:
 *         creatorId: "user123"
 *         title: "Aide pour le jardinage"
 *         description: "Besoin d'un coup de main pour entretenir mon jardin"
 *         neededDate: "2025-04-25T10:00:00Z"
 *         estimatedDuration: 120
 *         location: "25 avenue des Fleurs, Lyon"
 *         gpsCoordinates: "45.7640,4.8357"
 *         categoryId: "cat002"
 *         recurring: true
 *         frequency: "Hebdomadaire"
 *         status: "Ouvert"
 *         points_offered: 30
 * 
 *     updateHelpRequest:
 *       type: object
 *       properties:
 *         creatorId:
 *           type: string
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *         neededDate:
 *           type: string
 *           format: date-time
 *         estimatedDuration:
 *           type: integer
 *         location:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         categoryId:
 *           type: string
 *         recurring:
 *           type: boolean
 *         frequency:
 *           type: string
 *           maxLength: 50
 *         status:
 *           type: string
 *           maxLength: 50
 *         points_offered:
 *           type: integer
 *       example:
 *         title: "Mise à jour - besoin de bras pour un petit déménagement"
 *         estimatedDuration: 240
 *         status: "En cours"
 *         points_offered: 60
 */

export {};
