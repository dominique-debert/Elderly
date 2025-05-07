/**
 * @swagger
 * components:
 *   schemas:
 *     ActivityCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie d'activité
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie d'activité
 *           example: "Sports"
 *         description:
 *           type: string
 *           description: Description de la catégorie d'activité
 *           example: "Catégorie pour les activités sportives"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie d'activité
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie d'activité
 *           example: "2025-04-16T14:48:00.000Z"
 *         activity:
 *           type: array
 *           description: Liste des activités associées à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/Activity'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Sports"
 *         description: "Catégorie pour les activités sportives"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         activity: []
 *
 *     CreateActivityCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie d'activité
 *           example: "Sports"
 *         description:
 *           type: string
 *           description: Description de la catégorie d'activité
 *           example: "Catégorie pour les activités sportives"
 *       example:
 *         name: "Sports"
 *         description: "Catégorie pour les activités sportives"
 *
 *     UpdateActivityCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie d'activité
 *           example: "Sports"
 *         description:
 *           type: string
 *           description: Description de la catégorie d'activité
 *           example: "Catégorie pour les activités sportives"
 *       example:
 *         name: "Sports"
 *         description: "Catégorie pour les activités sportives"
 */
