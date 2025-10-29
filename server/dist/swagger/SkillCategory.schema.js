"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     SkillCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *           description: Identifiant unique de la catégorie de compétence
 *           example: "cl1234567890abcdefghij"
 *         name:
 *           type: string
 *           description: Nom de la catégorie de compétence
 *           example: "Compétences en informatique"
 *         description:
 *           type: string
 *           description: Description de la catégorie de compétence
 *           example: "Catégorie pour les compétences liées à l'informatique"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date de création de la catégorie de compétence
 *           example: "2025-04-16T14:48:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date de la dernière mise à jour de la catégorie de compétence
 *           example: "2025-04-16T14:48:00.000Z"
 *         skill:
 *           type: array
 *           description: Liste des compétences associées à cette catégorie
 *           items:
 *             $ref: '#/components/schemas/Skill'
 *       example:
 *         id: "cl1234567890abcdefghij"
 *         name: "Compétences en informatique"
 *         description: "Catégorie pour les compétences liées à l'informatique"
 *         createdAt: "2025-04-16T14:48:00.000Z"
 *         updatedAt: "2025-04-16T14:48:00.000Z"
 *         skill: []
 *
 *     CreateSkillCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de compétence
 *           example: "Compétences en informatique"
 *         description:
 *           type: string
 *           description: Description de la catégorie de compétence
 *           example: "Catégorie pour les compétences liées à l'informatique"
 *       example:
 *         name: "Compétences en informatique"
 *         description: "Catégorie pour les compétences liées à l'informatique"
 *
 *     UpdateSkillCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nom de la catégorie de compétence
 *           example: "Compétences en informatique"
 *         description:
 *           type: string
 *           description: Description de la catégorie de compétence
 *           example: "Catégorie pour les compétences liées à l'informatique"
 *       example:
 *         name: "Compétences en informatique"
 *         description: "Catégorie pour les compétences liées à l'informatique"
 */
