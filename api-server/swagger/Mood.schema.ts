/**
 * @swagger
 * tags:
 *   name: Humeurs
 *   description: Gestion des humeurs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Mood:
 *       type: object
 *       required:
 *         - name
 *         - valence
 *         - intensity
 *         - color
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         valence:
 *           type: string
 *           enum: [positive, negative, neutre]
 *         intensity:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *         color:
 *           type: string
 *           example: "#FF0000"
 */
