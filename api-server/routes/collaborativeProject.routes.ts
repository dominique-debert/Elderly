import { Router } from 'express';
import { validate } from '@/middlewares/validate';
import errorHandler from '@/middlewares/errorHandler';

import {
  projectSchema,
  idParamProjectSchema
} from '../validators/collaborativeProject.validator';

import {
  createCollaborativeProject,
  getAllCollaborativeProjects,
  getCollaborativeProjectById,
  updateCollaborativeProject,
  deleteCollaborativeProject
} from '@/controllers/index.controller';

const router = Router();

/**
 * @swagger
 * /api/collaborative-projects:
 *   post:
 *     summary: Crée un nouveau projet
 *     tags: [Collaborative projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CollaborativeProject'
 *     responses:
 *       201:
 *         description: Exercice créé
 */
router.post(
  '/',
  validate(projectSchema),
  errorHandler,
  createCollaborativeProject
);

/**
 * @swagger
 * /api/collaborative-projects:
 *   get:
 *     summary: Récupère la liste de tous les projets
 *     tags: [Collaborative projects]
 *     responses:
 *       200:
 *         description: Liste des projets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CollaborativeProject'
 */
router.get(
  '/',
  errorHandler,
  getAllCollaborativeProjects
);

/**
 * @swagger
 * /api/collaborative-projects/{id}:
 *   get:
 *     summary: Récupère un projet par son ID
 *     tags: [Collaborative projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du projet à récupérer
 *     responses:
 *       200:
 *         description: Projet trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CollaborativeProject'
 *       404:
 *         description: Projet non trouvé
 */
router.get(
  '/:id',
  validate(idParamProjectSchema, 'params'),
  getCollaborativeProjectById
);

/**
 * @swagger
 * /api/collaborative-projects/{id}:
 *   put:
 *     summary: Met à jour un projet existant
 *     tags: [Collaborative projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du projet à mettre à jour
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CollaborativeProject'
 *     responses:
 *       200:
 *         description: Projet mis à jour
 *       404:
 *         description: Projet non trouvé
 */
router.put(
  '/:id',
  validate(idParamProjectSchema, 'params'),
  errorHandler,
  updateCollaborativeProject
);

/**
 * @swagger
 * /api/collaborative-projects/{id}:
 *   delete:
 *     summary: Supprime un projet
 *     tags: [Collaborative projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID du projet à supprimer
 *     responses:
 *       204:
 *         description: Supprimé avec succès
 *       404:
 *         description: Projet non trouvé
 */
router.delete(
  '/:id',
  validate(idParamProjectSchema, 'params'),
  errorHandler,
  deleteCollaborativeProject
);

export default router;