"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     BadgeCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           description: Identifiant unique de la catégorie de badgge
 *           example: 1
 *         name:
 *           type: string
 *           description: Nom de la catégorie de badgge
 *           example: "Expert"
 *         description:
 *           type: string
 *           description: Description de la catégorie de badgge
 *           example: "Catégorie pour les badges 'Expert'"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie de badgge
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie de badgge
 *           example: "2025-04-16T14:48:00.000Z"
 *         badge:
 *           type: array
 *           description: Liste des badges associées à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/Badge'
 *       example:
 *         id: 1
 *         name: "Expert"
 *         description: "Catégorie pour les badges 'Expert'"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         badge: []
 *
 *     CreateBadgeCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de badgge
 *           example: "Expert"
 *         description:
 *           type: string
 *           description: Description de la catégorie de badgge
 *           example: "Catégorie pour les badges 'Expert'"
 *       example:
 *         name: "Expert"
 *         description: "Catégorie pour les badges 'Expert'"
 *
 *     UpdateBadgeCategory:
 *       type: object
 *       properties:
 *         categoryName:
 *           type: string
 *           description: Nom de la catégorie de badgge
 *           example: "Expert"
 *         description:
 *           type: string
 *           description: Description de la catégorie de badgge
 *           example: "Catégorie pour les badges 'Expert'"
 *       example:
 *         name: "Expert"
 *         description: "Catégorie pour les badges 'Expert'"
 */
