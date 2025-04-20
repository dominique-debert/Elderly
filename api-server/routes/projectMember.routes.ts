import { Router } from 'express';
import {
  createProjectMember,
  getAllProjectMembers,
  getProjectMemberById,
  updateProjectMember,
  deleteProjectMember
} from '@/controllers/index.controller';

import { projectMemberSchema, idParamProjectMemberSchema } from '@/schemas/validation/projectMember.schema';
import errorHandler from '@/middlewares/errorHandler';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Project Members
 *   description: Gestion des membres de projets
 */

/**
 * @swagger
 * /api/project-members:
 *   post:
 *     summary: Créer un nouveau membre de projet
 *     tags: [Project Members]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Membre de projet créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectMember'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(projectMemberSchema), errorHandler, createProjectMember);

/**
 * @swagger
 * /api/project-members:
 *   get:
 *     summary: Récupérer tous les membres de projets
 *     tags: [Project Members]
 *     responses:
 *       200:
 *         description: Liste des membres récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 members:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProjectMember'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', errorHandler, getAllProjectMembers);

/**
 * @swagger
 * /api/project-members/{id}:
 *   get:
 *     summary: Récupérer un membre par ID
 *     tags: [Project Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du membre
 *     responses:
 *       200:
 *         description: Membre trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectMember'
 *       404:
 *         description: Membre non trouvé
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamProjectMemberSchema, 'params'), errorHandler, getProjectMemberById);

/**
 * @swagger
 * /api/project-members/{id}:
 *   put:
 *     summary: Mettre à jour un membre
 *     tags: [Project Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du membre
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Membre mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectMember'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamProjectMemberSchema, 'params'), errorHandler, updateProjectMember);

/**
 * @swagger
 * /api/project-members/{id}:
 *   delete:
 *     summary: Supprimer un membre
 *     tags: [Project Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du membre
 *     responses:
 *       200:
 *         description: Membre supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamProjectMemberSchema, 'params'), errorHandler, deleteProjectMember);

export default router;
