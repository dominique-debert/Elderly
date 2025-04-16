/**
 * @swagger
 * components:
 *   schemas:
 *     ProjectCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie de projet
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie de projet
 *           example: "Projets communautaires"
 *         description:
 *           type: string
 *           description: Description de la catégorie de projet
 *           example: "Catégorie pour les projets impliquant la communauté"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie de projet
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie de projet
 *           example: "2025-04-16T14:48:00.000Z"
 *         collaborativeProject:
 *           type: array
 *           description: Liste des projets collaboratifs associés à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/CollaborativeProject'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Projets communautaires"
 *         description: "Catégorie pour les projets impliquant la communauté"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         collaborativeProject: []
 *
 *     CreateProjectCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de projet
 *           example: "Projets communautaires"
 *         description:
 *           type: string
 *           description: Description de la catégorie de projet
 *           example: "Catégorie pour les projets impliquant la communauté"
 *       example:
 *         name: "Projets communautaires"
 *         description: "Catégorie pour les projets impliquant la communauté"
 *
 *     UpdateProjectCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de projet
 *           example: "Projets communautaires"
 *         description:
 *           type: string
 *           description: Description de la catégorie de projet
 *           example: "Catégorie pour les projets impliquant la communauté"
 *       example:
 *         name: "Projets communautaires"
 *         description: "Catégorie pour les projets impliquant la communauté"
 */
