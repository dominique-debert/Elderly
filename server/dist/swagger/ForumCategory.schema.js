"use strict";
/**
 * @swagger
 * components:
 *   schemas:
 *     ForumCategory:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         name:
 *           type: string
 *           maxLength: 255
 *         description:
 *           type: string
 *           maxLength: 255
 *         parentCategoryId:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2a8abc0001abc123def999"
 *         name: "Discussions Générales"
 *         description: "Catégorie pour les discussions tout sujet"
 *         parentCategoryId: "root"
 *         createdAt: "2025-04-15T10:00:00Z"
 *         updatedAt: "2025-04-15T10:00:00Z"
 */
