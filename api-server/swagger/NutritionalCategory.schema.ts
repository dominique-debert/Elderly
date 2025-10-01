/**
 * @swagger
 * components:
 *   schemas:
 *     NutritionalCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie nutritionnelle
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie nutritionnelle
 *           example: "Régime végétarien"
 *         description:
 *           type: string
 *           description: Description de la catégorie nutritionnelle
 *           example: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie nutritionnelle
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie nutritionnelle
 *           example: "2025-04-16T14:48:00.000Z"
 *         nutritionalAdvice:
 *           type: array
 *           description: Liste des conseils nutritionnels associés à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/NutritionalAdvice'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Régime végétarien"
 *         description: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         nutritionalAdvice: []
 *
 *     CreateNutritionalCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie nutritionnelle
 *           example: "Régime végétarien"
 *         description:
 *           type: string
 *           description: Description de la catégorie nutritionnelle
 *           example: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *       example:
 *         name: "Régime végétarien"
 *         description: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *
 *     UpdateNutritionalCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie nutritionnelle
 *           example: "Régime végétarien"
 *         description:
 *           type: string
 *           description: Description de la catégorie nutritionnelle
 *           example: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 *       example:
 *         name: "Régime végétarien"
 *         description: "Catégorie pour les conseils nutritionnels adaptés aux régimes végétariens"
 */
