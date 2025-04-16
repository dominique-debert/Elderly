/**
 * @swagger
 * components:
 *   schemas:
 *     Activity:
 *       type: object
 *       required:
 *         - title
 *         - startDate
 *         - creatorId
 *         - categoryId
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         creatorId:
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
 *         gpsCoordinates:
 *           type: string
 *         maxSpots:
 *           type: integer
 *         categoryId:
 *           type: string
 *         recurring:
 *           type: boolean
 *         frequency:
 *           type: string
 *         reducedMobilityAccess:
 *           type: boolean
 *         cost:
 *           type: number
 *           format: float
 *         status:
 *           type: string
 *         weatherRequirements:
 *           type: string
 *         transportOptions:
 *           type: string
 *       example:
 *         title: "Atelier peinture pour enfants"
 *         description: "Une session ludique pour découvrir la peinture"
 *         startDate: "2025-05-01"
 *         endDate: "2025-05-01"
 *         location: "Maison de quartier - Salle 3"
 *         gpsCoordinates: "48.8566, 2.3522"
 *         maxSpots: 12
 *         categoryId: "cat001"
 *         recurring: false
 *         frequency: null
 *         reducedMobilityAccess: true
 *         cost: 5.00
 *         status: "active"
 *         weatherRequirements: "Aucune"
 *         transportOptions: "Bus 42, Métro Ligne 7"
 */

