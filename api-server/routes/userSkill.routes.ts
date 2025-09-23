import { Router } from 'express';
import {
  createUserSkill,
  getAllUserSkills,
  getUserSkillById,
  updateUserSkill,
  deleteUserSkill
} from '@/controllers/index.controller';

import { userSkillSchema, idParamUserSkillSchema } from '../validators/userSkill.validator';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User Skills
 *   description: Gestion des compétences utilisateurs
 */

/**
 * @swagger
 * /api/user-skills:
 *   post:
 *     summary: Créer une nouvelle compétence utilisateur
 *     tags: [User Skills]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Compétence utilisateur créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSkill'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(userSkillSchema), createUserSkill);

/**
 * @swagger
 * /api/user-skills:
 *   get:
 *     summary: Récupérer toutes les compétences utilisateurs
 *     tags: [User Skills]
 *     responses:
 *       200:
 *         description: Liste des compétences utilisateurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userSkills:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UserSkill'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllUserSkills);

/**
 * @swagger
 * /api/user-skills/{id}:
 *   get:
 *     summary: Récupérer une compétence utilisateur par ID
 *     tags: [User Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la compétence utilisateur
 *     responses:
 *       200:
 *         description: Compétence utilisateur trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSkill'
 *       404:
 *         description: Compétence utilisateur non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamUserSkillSchema, 'params'), getUserSkillById);

/**
 * @swagger
 * /api/user-skills/{id}:
 *   put:
 *     summary: Mettre à jour une compétence utilisateur
 *     tags: [User Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la compétence utilisateur
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Compétence utilisateur mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSkill'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamUserSkillSchema, 'params'), updateUserSkill);

/**
 * @swagger
 * /api/user-skills/{id}:
 *   delete:
 *     summary: Supprimer une compétence utilisateur
 *     tags: [User Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la compétence utilisateur
 *     responses:
 *       200:
 *         description: Compétence utilisateur supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamUserSkillSchema, 'params'), deleteUserSkill);

export default router;
