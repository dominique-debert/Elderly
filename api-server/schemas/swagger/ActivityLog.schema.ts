/**
 * @swagger
 * components:
 *   schemas:
 *     ActivityLog:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique du journal d'activité
 *           example: "cl1234567890abcdefghij"
 *         userId:
 *           type: string
 *           description: Identifiant de l'utilisateur associé à l'action
 *           example: "user123"
 *         action_type:
 *           type: string
 *           description: Type d'action effectuée
 *           example: "login"
 *         description:
 *           type: string
 *           description: Description de l'action effectuée
 *           example: "Connexion réussie"
 *         actionDate:
 *           type: string
 *           format: date-time
 *           description: Date et heure de l'action
 *           example: "2025-04-16T14:48:00.000Z"
 *         ipAddress:
 *           type: string
 *           description: Adresse IP de l'utilisateur ayant effectué l'action
 *           example: "192.168.1.1"
 *         device:
 *           type: string
 *           description: Type de dispositif utilisé pour effectuer l'action
 *           example: "Ordinateur portable"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de l'entrée du journal
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de l'entrée du journal
 *           example: "2025-04-16T14:48:00.000Z"
 *         user:
 *           $ref: '#/components/schemas/User'
 *           description: Utilisateur associé à l'action
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         userId: "user123"
 *         action_type: "login"
 *         description: "Connexion réussie"
 *         actionDate: "2025-04-16T14:48:00.000Z"
 *         ipAddress: "192.168.1.1"
 *         device: "Ordinateur portable"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         user: {}
 *
 *     CreateActivityLog:
 *       type: object
 *       required:
 *         - userId
 *       properties:
 *         userId:
 *           type: string
 *           format: cuid
 *           description: Identifiant de l'utilisateur associé à l'action
 *           example: "user123"
 *         action_type:
 *           type: string
 *           description: Type d'action effectuée
 *           example: "login"
 *         description:
 *           type: string
 *           description: Description de l'action effectuée
 *           example: "Connexion réussie"
 *         actionDate:
 *           type: string
 *           format: date-time
 *           description: Date et heure de l'action
 *           example: "2025-04-16T14:48:00.000Z"
 *         ipAddress:
 *           type: string
 *           description: Adresse IP de l'utilisateur ayant effectué l'action
 *           example: "192.168.1.1"
 *         device:
 *           type: string
 *           description: Type de dispositif utilisé pour effectuer l'action
 *           example: "Ordinateur portable"
 *       example:
 *         userId: "user123"
 *         action_type: "login"
 *         description: "Connexion réussie"
 *         actionDate: "2025-04-16T14:48:00.000Z"
 *         ipAddress: "192.168.1.1"
 *         device: "Ordinateur portable"
 *
 *     UpdateActivityLog:
 *       type: object
 *       properties:
 *         action_type:
 *           type: string
 *           description: Type d'action effectuée
 *           example: "login"
 *         description:
 *           type: string
 *           description: Description de l'action effectuée
 *           example: "Connexion réussie"
 *         actionDate:
 *           type: string
 *           format: date-time
 *           description: Date et heure de l'action
 *           example: "2025-04-16T14:48:00.000Z"
 *         ipAddress:
 *           type: string
 *           description: Adresse IP de l'utilisateur ayant effectué l'action
 *           example: "192.168.1.1"
 *         device:
 *           type: string
 *           description: Type de dispositif utilisé pour effectuer l'action
 *           example: "Ordinateur portable"
 *       example:
 *         action_type: "login"
 *         description: "Connexion réussie"
 *         actionDate: "2025-04-16T14:48:00.000Z"
 *         ipAddress: "192.168.1.1"
 *         device: "Ordinateur portable"
 */
