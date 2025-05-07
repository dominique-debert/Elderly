/**
 * @swagger
 * components:
 *   schemas:
 *     BadgeCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie de badge
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie de badge
 *           example: "Expert"
 *         description:
 *           type: string
 *           description: Description de la catégorie de badge
 *           example: "Catégorie pour les experts"
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Expert"
 *         description: "Catégorie pour les experts"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 */