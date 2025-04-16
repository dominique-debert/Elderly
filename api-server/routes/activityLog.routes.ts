import { Router } from 'express';
import {
  createActivityLog,
  getAllActivityLogs,
  getActivityLogById,
  updateActivityLog,
  deleteActivityLog
} from '@/controllers/activities/activityLog.controller';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ActivityLog:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: cuid
 *         userId:
 *           type: string
 *         activityId:
 *           type: string
 *         timestamp:
 *           type: string
 *           format: date-time
 *         notes:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: "clv2abc123456xyz"
 *         userId: "user001"
 *         activityId: "activity001"
 *         timestamp: "2025-04-16T10:00:00Z"
 *         notes: "Très bonne participation"
 *         createdAt: "2025-04-16T10:00:00Z"
 *         updatedAt: "2025-04-16T10:00:00Z"
 */

/**
 * @swagger
 * /api/activity-logs:
 *   post:
 *     summary: Créer un nouveau journal d’activité
 *     tags: [Activity Logs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActivityLog'
 *     responses:
 *       201:
 *         description: Journal créé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActivityLog'
 */
router.post('/', createActivityLog);

/**
 * @swagger
 * /api/activity-logs:
 *   get:
 *     summary: Récupérer tous les journaux d’activité
 *     tags: [Activity Logs]
 *     responses:
 *       200:
 *         description: Liste des journaux récupérée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 activityLogs:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ActivityLog'
 */
router.get('/', getAllActivityLogs);

/**
 * @swagger
 * /api/activity-logs/{id}:
 *   get:
 *     summary: Récupérer un journal d’activité par ID
 *     tags: [Activity Logs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: cuid
 *     responses:
 *       200:
 *         description: Journal récupéré
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActivityLog'
 *       404:
 *         description: Journal non trouvé
 */
router.get('/:id', getActivityLogById);

/**
 * @swagger
 * /api/activity-logs/{id}:
 *   put:
 *     summary: Mettre à jour un journal d’activité
 *     tags: [Activity Logs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActivityLog'
 *     responses:
 *       200:
 *         description: Journal mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ActivityLog'
 */
router.put('/:id', updateActivityLog);

/**
 * @swagger
 * /api/activity-logs/{id}:
 *   delete:
 *     summary: Supprimer un journal d’activité
 *     tags: [Activity Logs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Journal supprimé
 */
router.delete('/:id', deleteActivityLog);

export default router;
