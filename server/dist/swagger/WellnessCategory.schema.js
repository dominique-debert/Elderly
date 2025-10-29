"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     WellnessCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie de bien-être
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie de bien-être
 *           example: "Bien-être mental"
 *         description:
 *           type: string
 *           description: Description de la catégorie de bien-être
 *           example: "Catégorie pour les activités liées au bien-être mental"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie de bien-être
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie de bien-être
 *           example: "2025-04-16T14:48:00.000Z"
 *         wellnessBadge:
 *           type: array
 *           description: Liste des badges de bien-être associés à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/WellnessBadge'
 *         wellnessGoal:
 *           type: array
 *           description: Liste des objectifs de bien-être associés à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/WellnessGoal'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Bien-être mental"
 *         description: "Catégorie pour les activités liées au bien-être mental"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         wellnessBadge: []
 *         wellnessGoal: []
 *
 *     CreateWellnessCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de bien-être
 *           example: "Bien-être mental"
 *         description:
 *           type: string
 *           description: Description de la catégorie de bien-être
 *           example: "Catégorie pour les activités liées au bien-être mental"
 *       example:
 *         name: "Bien-être mental"
 *         description: "Catégorie pour les activités liées au bien-être mental"
 *
 *     UpdateWellnessCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de bien-être
 *           example: "Bien-être mental"
 *         description:
 *           type: string
 *           description: Description de la catégorie de bien-être
 *           example: "Catégorie pour les activités liées au bien-être mental"
 *       example:
 *         name: "Bien-être mental"
 *         description: "Catégorie pour les activités liées au bien-être mental"
 */
