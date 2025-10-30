/**
 * @swagger
 * components:
 *   schemas:
 *     ActivityRegistration:
 *       type: object
 *       required:
 *         - activityId
 *         - userId
 *         - registrationDate
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de l'inscription à l'activité
 *           example: "cl1234567890abcdefghij"
 *         activityId:
 *           type: string
 *           format: cuid
 *           description: Identifiant de l'activité associée
 *           example: "act123"
 *         userId:
 *           type: string
 *           format: cuid
 *           description: Identifiant de l'utilisateur inscrit
 *           example: "user123"
 *         registrationDate:
 *           type: string
 *           format: date-time
 *           description: Date et heure de l'inscription
 *           example: "2025-04-16T14:48:00.000Z"
 *         status:
 *           type: string
 *           maxLength: 50
 *           description: Statut de l'inscription
 *           example: "confirmé"
 *         attendanceConfirmed:
 *           type: boolean
 *           description: Indique si la présence a été confirmée
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de l'inscription
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de l'inscription
 *           example: "2025-04-16T14:48:00.000Z"
 *         activity:
 *           $ref: '#/components/schemas/Activity'
 *           description: Activité associée à l'inscription
 *         user:
 *           $ref: '#/components/schemas/User'
 *           description: Utilisateur inscrit à l'activité
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         activityId: "act123"
 *         userId: "user123"
 *         registrationDate: "2025-04-16T14:48:00.000Z"
 *         status: "confirmé"
 *         attendanceConfirmed: false
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         activity: {}
 *         user: {}
 *
 *     CreateActivityRegistration:
 *       type: object
 *       required:
 *         - activityId
 *         - userId
 *         - registrationDate
 *       properties:
 *         activityId:
 *           type: string
 *           format: cuid
 *           description: Identifiant de l'activité associée
 *           example: "act123"
 *         userId:
 *           type: string
 *           format: cuid
 *           description: Identifiant de l'utilisateur inscrit
 *           example: "user123"
 *         registrationDate:
 *           type: string
 *           format: date-time
 *           description: Date et heure de l'inscription
 *           example: "2025-04-16T14:48:00.000Z"
 *         status:
 *           type: string
 *           maxLength: 50
 *           description: Statut de l'inscription
 *           example: "confirmé"
 *         attendanceConfirmed:
 *           type: boolean
 *           description: Indique si la présence a été confirmée
 *           example: false
 *       example:
 *         activityId: "act123"
 *         userId: "user123"
 *         registrationDate: "2025-04-16T14:48:00.000Z"
 *         status: "confirmé"
 *         attendanceConfirmed: false
 *
 *     UpdateActivityRegistration:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           maxLength: 50
 *           description: Statut de l'inscription
 *           example: "confirmé"
 *         attendanceConfirmed:
 *           type: boolean
 *           description: Indique si la présence a été confirmée
 *           example: false
 *       example:
 *         status: "confirmé"
 *         attendanceConfirmed: false
 */
