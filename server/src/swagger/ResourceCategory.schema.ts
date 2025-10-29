/**
 * @swagger
 * components:
 *   schemas:
 *     ResourceCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie de ressource
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie de ressource
 *           example: "Ressources éducatives"
 *         description:
 *           type: string
 *           description: Description de la catégorie de ressource
 *           example: "Catégorie pour les ressources éducatives"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie de ressource
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie de ressource
 *           example: "2025-04-16T14:48:00.000Z"
 *         resource:
 *           type: array
 *           description: Liste des ressources associées à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/Resource'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Ressources éducatives"
 *         description: "Catégorie pour les ressources éducatives"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         resource: []
 *
 *     CreateResourceCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de ressource
 *           example: "Ressources éducatives"
 *         description:
 *           type: string
 *           description: Description de la catégorie de ressource
 *           example: "Catégorie pour les ressources éducatives"
 *       example:
 *         name: "Ressources éducatives"
 *         description: "Catégorie pour les ressources éducatives"
 *
 *     UpdateResourceCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de ressource
 *           example: "Ressources éducatives"
 *         description:
 *           type: string
 *           description: Description de la catégorie de ressource
 *           example: "Catégorie pour les ressources éducatives"
 *       example:
 *         name: "Ressources éducatives"
 *         description: "Catégorie pour les ressources éducatives"
 */
