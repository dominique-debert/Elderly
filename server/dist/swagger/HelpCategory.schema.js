"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     HelpCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie d'aide
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie d'aide
 *           example: "Aide à domicile"
 *         description:
 *           type: string
 *           description: Description de la catégorie d'aide
 *           example: "Catégorie pour les services d'aide à domicile"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie d'aide
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie d'aide
 *           example: "2025-04-16T14:48:00.000Z"
 *         helpRequest:
 *           type: array
 *           description: Liste des demandes d'aide associées à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/HelpRequest'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Aide à domicile"
 *         description: "Catégorie pour les services d'aide à domicile"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         helpRequest: []
 *
 *     CreateHelpCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie d'aide
 *           example: "Aide à domicile"
 *         description:
 *           type: string
 *           description: Description de la catégorie d'aide
 *           example: "Catégorie pour les services d'aide à domicile"
 *       example:
 *         name: "Aide à domicile"
 *         description: "Catégorie pour les services d'aide à domicile"
 *
 *     UpdateHelpCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie d'aide
 *           example: "Aide à domicile"
 *         description:
 *           type: string
 *           description: Description de la catégorie d'aide
 *           example: "Catégorie pour les services d'aide à domicile"
 *       example:
 *         name: "Aide à domicile"
 *         description: "Catégorie pour les services d'aide à domicile"
 */
