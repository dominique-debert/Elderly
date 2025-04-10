import express from 'express';
import * as skillController from '../controllers/skill.controller.js';

const skillRoutes = express.Router();
/**
 * @swagger
 * /api/skills:
 *   post:
 *     summary: Créer une nouvelle compétence
 *     tags: [Skills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillInput'
 *     responses:
 *       201:
 *         description: Compétence créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Données invalides
 */
skillRoutes.post('/', skillController.createSkill);

/**
 * @swagger
 * /api/skills:
 *   get:
 *     summary: Récupérer la liste des compétences
 *     tags: [Skills]       
 */ 
skillRoutes.get('/', skillController.getAllSkills);

/**
 * @swagger
 * /api/skills/{id}:
 *   get:
 *     summary: Récupérer une compétence par ID
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compétence
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Compétence trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       404:
 *         description: Compétence non trouvée
 */
skillRoutes.get('/:id', skillController.getSkillById);

/**
 * @swagger
 * /api/skills/{id}:
 *   put:
 *     summary: Mettre à jour une compétence
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compétence
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillInput'
 *     responses:
 *       200:
 *         description: Compétence mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Données invalides
 */
skillRoutes.put('/:id', skillController.updateSkill);

/**
 * @swagger
 * /api/skills/{id}:
 *   delete:
 *     summary: Supprimer une compétence
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compétence
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Compétence supprimée avec succès
 *       404:
 *         description: Compétence non trouvée
 */
skillRoutes.delete('/:id', skillController.deleteSkill);

export default skillRoutes;