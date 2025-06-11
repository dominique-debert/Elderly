import { Router } from 'express';
import {
  createProjectTask,
  getAllProjectTasks,
  getProjectTaskById,
  updateProjectTask,
  deleteProjectTask
} from '@/controllers/index.controller';

import { projectTaskSchema, idParamProjectTaskSchema } from '../validators/projectTask.validator';
import { validate } from '@/middlewares/validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Project Tasks
 *   description: Gestion des tâches de projets
 */

/**
 * @swagger
 * /api/project-tasks:
 *   post:
 *     summary: Créer un nouveau tâche de projet
 *     tags: [Project Tasks]
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Tâche de projet créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectTask'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', validate(projectTaskSchema), createProjectTask);

/**
 * @swagger
 * /api/project-tasks:
 *   get:
 *     summary: Récupérer toutes les tâches de projets
 *     tags: [Project Tasks]
 *     responses:
 *       200:
 *         description: Liste des tâches récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tasks:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ProjectTask'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllProjectTasks);

/**
 * @swagger
 * /api/project-tasks/{id}:
 *   get:
 *     summary: Récupérer une tâche par ID
 *     tags: [Project Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *         description: ID de la tâche
 *     responses:
 *       200:
 *         description: Tâche trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectTask'
 *       404:
 *         description: Tâche non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', validate(idParamProjectTaskSchema, 'params'), getProjectTaskById);

/**
 * @swagger
 * /api/project-tasks/{id}:
 *   put:
 *     summary: Mettre à jour une tâche
 *     tags: [Project Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tâche
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Tâche mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectTask'
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', validate(idParamProjectTaskSchema, 'params'), updateProjectTask);

/**
 * @swagger
 * /api/project-tasks/{id}:
 *   delete:
 *     summary: Supprimer une tâche
 *     tags: [Project Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tâche
 *     responses:
 *       200:
 *         description: Tâche supprimée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', validate(idParamProjectTaskSchema, 'params'), deleteProjectTask);

export default router;
