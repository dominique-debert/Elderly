"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     IssueCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie de problème
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie de problème
 *           example: "Propreté urbaine"
 *         description:
 *           type: string
 *           description: Description de la catégorie de problème
 *           example: "Catégorie pour les problèmes liés à la propreté urbaine"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie de problème
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie de problème
 *           example: "2025-04-16T14:48:00.000Z"
 *         urbanIssueReport:
 *           type: array
 *           description: Liste des signalements de problèmes urbains associés à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/UrbanIssueReport'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Propreté urbaine"
 *         description: "Catégorie pour les problèmes liés à la propreté urbaine"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         urbanIssueReport: []
 *
 *     CreateIssueCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de problème
 *           example: "Propreté urbaine"
 *         description:
 *           type: string
 *           description: Description de la catégorie de problème
 *           example: "Catégorie pour les problèmes liés à la propreté urbaine"
 *       example:
 *         name: "Propreté urbaine"
 *         description: "Catégorie pour les problèmes liés à la propreté urbaine"
 *
 *     UpdateIssueCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de problème
 *           example: "Propreté urbaine"
 *         description:
 *           type: string
 *           description: Description de la catégorie de problème
 *           example: "Catégorie pour les problèmes liés à la propreté urbaine"
 *       example:
 *         name: "Propreté urbaine"
 *         description: "Catégorie pour les problèmes liés à la propreté urbaine"
 */
