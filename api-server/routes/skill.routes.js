import { Router } from 'express';
import { validate } from '../middlewares/validate.js';
import errorHandler from '../middlewares/errorHandler.js';

import {
  skillSchema,
  idParamSkillSchema
}
from '../schemas/skill.schema.js'

import { 
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkill,
  deleteSkill
}
from '../controllers/skill.controller.js';

const router = Router();
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
router.post('/', validate(skillSchema), errorHandler, createSkill);

/**
 * @swagger
 * /api/skills:
 *   get:
 *     summary: Récupérer la liste des compétences
 *     tags: [Skills]       
 */ 
router.get('/', errorHandler, getAllSkills);

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
 *           format: cuid
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
router.get('/:id', validate(idParamSkillSchema, 'params'), errorHandler, getSkillById);

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
 *           format: cuid
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
router.put('/:id', validate(idParamSkillSchema, 'params'), errorHandler, updateSkill);

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
 *           format: cuid
 *     responses:
 *       200:
 *         description: Compétence supprimée avec succès
 *       404:
 *         description: Compétence non trouvée
 */
router.delete('/:id', validate(idParamSkillSchema, 'params'), errorHandler, deleteSkill);

export default router;