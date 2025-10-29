"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     Conversation:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         type:
 *           type: string
 *           maxLength: 255
 *         creationDate:
 *           type: string
 *           format: date-time
 *         title:
 *           type: string
 *           maxLength: 255
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2b7xyz0002xyz987ghijk"
 *         type: "group"
 *         creationDate: "2025-04-10T12:30:00Z"
 *         title: "Projet Helpy - Coordination"
 *         createdAt: "2025-04-10T12:30:00Z"
 *         updatedAt: "2025-04-11T15:45:00Z"

 *     createConversation:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           maxLength: 255
 *         creationDate:
 *           type: string
 *           format: date-time
 *         title:
 *           type: string
 *           maxLength: 255
 *       example:
 *         type: "private"
 *         creationDate: "2025-04-15T08:00:00Z"
 *         title: "Conversation privée avec Sophie"

 *     updateConversation:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           maxLength: 255
 *         creationDate:
 *           type: string
 *           format: date-time
 *         title:
 *           type: string
 *           maxLength: 255
 *       example:
 *         type: "group"
 *         creationDate: "2025-04-12T10:00:00Z"
 *         title: "Nouveau nom de la conversation"
 */
