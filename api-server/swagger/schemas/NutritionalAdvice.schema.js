/**
 * @swagger
 * components:
 *   schemas:
 *     NutritionalAdvice:
 *       type: object
 *       required:
 *         - title
 *         - season
 *         - category
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: ID auto-incrémenté
 *         title:
 *           type: string
 *           description: Titre de l'avis nutritionnel
 *         description:
 *           type: string
 *           description: Description de l'avis
 *         category:
 *           type: string
 *           description: Catégorie de l'avis
 *         season:
 *           type: string
 *           enum: [printemps, été, automne, hiver]
 *           description: Saison concernée
 *         image:
 *           type: string
 *           description: URL ou chemin de l’image associée
 *       example:
 *         id: 1
 *         title: Conseils pour l'été
 *         description: Buvez beaucoup d'eau
 *         category: hydratation
 *         season: été
 *         image: https://example.com/image.jpg
 */
