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
 *         categoryId:
 *           type: integer
 *           description: Id de la catégorie du badge
 *         level:
 *           type: integer
 *           description: Niveau du badge
 *       example:
 *         name: Expert
 *         description: Badge pour les utilisateurs experts
 *         icon: expert.png
 *         categoryId: 1
 *         level: 3
 */
