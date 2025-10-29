/**
 * @swagger
 * components:
 *   schemas:
 *     ServiceCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie de service
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie de service
 *           example: "Services de santé"
 *         description:
 *           type: string
 *           description: Description de la catégorie de service
 *           example: "Catégorie pour les services liés à la santé"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie de service
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie de service
 *           example: "2025-04-16T14:48:00.000Z"
 *         localService:
 *           type: array
 *           description: Liste des services locaux associés à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/LocalService'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Services de santé"
 *         description: "Catégorie pour les services liés à la santé"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         localService: []
 *
 *     CreateServiceCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de service
 *           example: "Services de santé"
 *         description:
 *           type: string
 *           description: Description de la catégorie de service
 *           example: "Catégorie pour les services liés à la santé"
 *       example:
 *         name: "Services de santé"
 *         description: "Catégorie pour les services liés à la santé"
 *
 *     UpdateServiceCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de service
 *           example: "Services de santé"
 *         description:
 *           type: string
 *           description: Description de la catégorie de service
 *           example: "Catégorie pour les services liés à la santé"
 *       example:
 *         name: "Services de santé"
 *         description: "Catégorie pour les services liés à la santé"
 */
