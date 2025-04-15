/**
 * @swagger
 * components:
 *   schemas:
 *     Badge:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Identifiant unique du badge
 *           format: cuid
 *         name:
 *           type: string
 *           description: Nom du badge
 *         description:
 *           type: string
 *           description: Description du badge
 *         icon:
 *           type: string
 *           description: Chemin de l'icône du badge
 *         category:
 *           type: string
 *           description: Catégorie du badge
 *         level:
 *           type: integer
 *           description: Niveau du badge
 *       example:
 *         name: Expert
 *         description: Badge pour les utilisateurs experts
 *         icon: expert.png
 *         category: Compétences
 *         level: 3
 */
