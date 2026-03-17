/**
 * @swagger
 * components:
 *   schemas:
 *     MunicipalEvent:
 *       type: object
 *       required:
 *         - title
 *         - startDate
 *         - endDate
 *         - location
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date-time
 *         endDate:
 *           type: string
 *           format: date-time
 *         location:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         organizer:
 *           type: string
 *           maxLength: 255
 *         contact:
 *           type: string
 *           maxLength: 255
 *         officialLink:
 *           type: string
 *           maxLength: 255
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def456"
 *         title: "Événement Municipal 2025"
 *         description: "Un événement organisé par la municipalité"
 *         startDate: "2025-06-01T10:00:00Z"
 *         endDate: "2025-06-01T16:00:00Z"
 *         location: "Salle des fêtes"
 *         gpsCoordinates: "48.8566, 2.3522"
 *         organizer: "Mairie de Paris"
 *         contact: "contact@mairie-paris.fr"
 *         officialLink: "https://www.paris.fr/evements"
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:00:00Z"
 *     createMunicipalEvent:
 *       type: object
 *       required:
 *         - title
 *         - startDate
 *         - endDate
 *         - location
 *       properties:
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date-time
 *         endDate:
 *           type: string
 *           format: date-time
 *         location:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         organizer:
 *           type: string
 *           maxLength: 255
 *         contact:
 *           type: string
 *           maxLength: 255
 *         officialLink:
 *           type: string
 *           maxLength: 255
 *       example:
 *         title: "Festival d'été 2025"
 *         description: "Un festival d'été organisé par la ville"
 *         startDate: "2025-07-01T09:00:00Z"
 *         endDate: "2025-07-01T18:00:00Z"
 *         location: "Parc de la ville"
 *         gpsCoordinates: "48.8566, 2.3522"
 *         organizer: "Ville de Paris"
 *         contact: "festival@paris.fr"
 *         officialLink: "https://www.paris.fr/festival-ete"
 *     updateMunicipalEvent:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date-time
 *         endDate:
 *           type: string
 *           format: date-time
 *         location:
 *           type: string
 *           maxLength: 255
 *         gpsCoordinates:
 *           type: string
 *         organizer:
 *           type: string
 *           maxLength: 255
 *         contact:
 *           type: string
 *           maxLength: 255
 *         officialLink:
 *           type: string
 *           maxLength: 255
 *       example:
 *         title: "Festival d'été 2025 - Mise à jour"
 *         description: "Mise à jour de l'événement annuel"
 *         startDate: "2025-07-02T09:00:00Z"
 *         endDate: "2025-07-02T18:00:00Z"
 *         location: "Parc des Expositions"
 *         gpsCoordinates: "48.8566, 2.3522"
 *         organizer: "Ville de Paris"
 *         contact: "contact@paris.fr"
 *         officialLink: "https://www.paris.fr/festival-ete-2025"
 */

export {};
