"use strict";
/**
 * components:
 *   schemas:
 *     CollaborativeProject:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Identifiant unique du projet collaboratif
 *         title:
 *           type: string
 *           maxLength: 255
 *           description: Titre du projet
 *         description:
 *           type: string
 *           nullable: true
 *           description: Description optionnelle du projet
 *         creatorId:
 *           type: string
 *           description: Identifiant de l'utilisateur créateur
 *         creationDate:
 *           type: string
 *           format: date-time
 *           description: Date de création du projet (automatique)
 *         status:
 *           type: string
 *           nullable: true
 *           maxLength: 50
 *           description: Statut du projet (ex: actif, terminé)
 *         categoryId:
 *           type: integer
 *           description: Identifiant de la catégorie du projet
 *       required:
 *         - id
 *         - title
 *         - creatorId
 *         - categoryId
 *         - creationDate
 *         - createdAt
*/ 
