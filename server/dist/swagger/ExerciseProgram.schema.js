"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     ExerciseProgram:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - difficulty_level
 *         - adapted_for_reduced_mobility
 *         - duration_minutes
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *           example: "Morning Stretch"
 *         category:
 *           type: string
 *           enum: [balance, strength, flexibility, cardio]
 *           example: flexibility
 *         difficulty_level:
 *           type: string
 *           enum: [beginner, intermediate, advanced]
 *           example: beginner
 *         adapted_for_reduced_mobility:
 *           type: boolean
 *           example: true
 *         duration_minutes:
 *           type: integer
 *           example: 30
 *         description:
 *           type: string
 *           example: "A gentle stretching routine to start the day."
 *         video_link:
 *           type: string
 *           example: "https://example.com/video.mp4"
 *         image:
 *           type: string
 *           example: "https://example.com/image.jpg"
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 */
