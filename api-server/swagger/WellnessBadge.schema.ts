/**
 * @swagger
 * components:
 *   schemas:
 *     WellnessBadge:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - level
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-incrémenté du badge
 *         name:
 *           type: string
 *           description: Nom du badge
 *         description:
 *           type: string
 *           description: Description détaillée du badge
 *         category:
 *           type: string
 *           enum: [physical, cognitive, nutrition, global]
 *           description: Catégorie du badge
 *         image:
 *           type: string
 *           description: URL de l'image
 *         level:
 *           type: integer
 *           minimum: 1
 *           maximum: 3
 *           description: Niveau du badge (1 à 3)
 *       example:
 *         id: 1
 *         name: "Badge Fitness"
 *         description: "Atteint 10 000 pas par jour"
 *         category: "physical"
 *         image: "https://example.com/image.png"
 *         level: 2
 */
