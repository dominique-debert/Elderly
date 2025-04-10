/**
 * @swagger
 * components:
 *   schemas:
 *     Skill:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: L'ID unique de la compétence
 *           example: 1
 *         name:
 *           type: string
 *           description: Le nom de la compétence
 *           example: JavaScript
 *         description:
 *           type: string
 *           description: Description détaillée de la compétence
 *           example: Langage de programmation pour le développement web front-end et back-end
 *         category:
 *           type: string
 *           description: Catégorie de la compétence
 *           example: Programmation
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Date de création
 *           example: 2023-04-09T10:00:00.000Z
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Date de dernière mise à jour
 *           example: 2023-04-09T10:00:00.000Z
 *     SkillInput:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: Le nom de la compétence
 *           example: JavaScript
 *         description:
 *           type: string
 *           description: Description détaillée de la compétence
 *           example: Langage de programmation pour le développement web front-end et back-end
 *         category:
 *           type: string
 *           description: Catégorie de la compétence
 *           example: Programmation
  */