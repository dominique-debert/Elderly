// swagger/components.js
/**
 * @swagger
 * components:
 *   schemas:
 *     LocalService:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Identifiant unique
 *         name:
 *           type: string
 *           description: Nom du service
 *         category:
 *           type: string
 *           description: Catégorie du service
 *         address:
 *           type: string
 *           description: Adresse du service
 *         gps_coordinates:
 *           type: string
 *           description: Coordonnées GPS (lat, long)
 *         phone:
 *           type: string
 *           description: Numéro de téléphone
 *         website:
 *           type: string
 *           description: Site web du service
 *         description:
 *           type: string
 *           description: Description du service
 *         hours:
 *           type: string
 *           description: Horaires d'ouverture
 *         senior_friendly:
 *           type: boolean
 *           description: Adapté aux seniors
 *       required:
 *         - name
 *         - category
 *         - address
 *         - senior_friendly
 */
