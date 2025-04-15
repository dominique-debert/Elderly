/**
 * @swagger
 * components:
 *   schemas:
 *     CognitiveExercise:
 *       type: object
 *       required:
 *         - creator_id
 *         - title
 *         - start_date
 *         - end_date
 *         - max_spots
 *         - category
 *         - reduced_mobility_access
 *         - difficulty_level
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de l'exercice cognitif (UUID)
 *         title:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *         start_date:
 *           type: date
 *         end_date:
 *           type: date
 *         location:
 *           type: string
 *         gps_coordinates:
 *           type: string
 *         max_spots:
 *           type: integer
 *         category:
 *           type: string
 *         recurring:
 *           type: boolean
 *         frequency:
 *           type: string
 *         reduced_mobility_access:
 *           type: boolean
 *         cost:
 *           type: float
 *         status:
 *           type: string
 *         weather_requirements:
 *           type: string
 *         transport_options:
 *           type: string
 */
