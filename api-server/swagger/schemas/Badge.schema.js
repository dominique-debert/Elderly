/**
 * @swagger
 * components:
 *   schemas:
 *     Badge:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Identifiant unique du badge
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
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Date de création du badge
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Date de mise à jour du badge
 *       example:
 *         name: Expert
 *         description: Badge pour les utilisateurs experts
 *         icon: expert.png
 *         category: Compétences
 *         level: 3
 *         created_at: 2025-04-10T10:00:00.000Z
 *         updated_at: 2025-04-10T10:00:00.000Z
 */
