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
 *           format: cuid
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
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     createMood:
 *       type: object
 *       required:
 *         - name
 *         - valence
 *         - intensity
 *         - color
 *       properties:
 *         id:
 *           type: integer
 *           format: cuid
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
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     updateMessage:
 *       type: object
 *       properties:
 *         content:
 *           type: string
 *         type:
 *           type: string
 *           maxLength: 50
 *         read:
 *           type: boolean
 *       example:
 *         content: "Comment vas-tu ?"
 *         type: "text"
 *         read: true
 */

export {};
