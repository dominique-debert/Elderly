
import { Router } from 'express';
import {
  createActivityRegistration,
  getAllActivityRegistrations,
  getActivityRegistrationById,
  updateActivityRegistration,
  deleteActivityRegistration
} from '@/controllers/activities/activityRegistration.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Activity Registrations
 *   description: Gestion des inscriptions aux activités
 */

/**
 * @swagger
 * /api/activity-registrations:
 *   post:
 *     summary: Créer une inscription à une activité
 *     tags: [Activity Registrations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - activityId
 *               - status
 *             properties:
 *               userId:
 *                 type: string
 *               activityId:
 *                 type: string
 *               status:
 *                 type: string
 *             example:
 *               userId: "clv123abc0001"
 *               activityId: "cla456xyz0002"
 *               status: "confirmed"
 *     responses:
 *       201:
 *         description: Inscription créée avec succès
 *       500:
 *         description: Erreur serveur
 */
router.post('/', createActivityRegistration);

/**
 * @swagger
 * /api/activity-registrations:
 *   get:
 *     summary: Récupérer toutes les inscriptions aux activités
 *     tags: [Activity Registrations]
 *     responses:
 *       200:
 *         description: Liste des inscriptions récupérée
 *       500:
 *         description: Erreur serveur
 */
router.get('/', getAllActivityRegistrations);

/**
 * @swagger
 * /api/activity-registrations/{id}:
 *   get:
 *     summary: Récupérer une inscription par ID
 *     tags: [Activity Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'inscription
 *     responses:
 *       200:
 *         description: Inscription trouvée
 *       404:
 *         description: Inscription non trouvée
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', getActivityRegistrationById);

/**
 * @swagger
 * /api/activity-registrations/{id}:
 *   put:
 *     summary: Mettre à jour une inscription
 *     tags: [Activity Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'inscription à modifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *             example:
 *               status: "cancelled"
 *     responses:
 *       200:
 *         description: Inscription mise à jour
 *       500:
 *         description: Erreur serveur
 */
router.put('/:id', updateActivityRegistration);

/**
 * @swagger
 * /api/activity-registrations/{id}:
 *   delete:
 *     summary: Supprimer une inscription
 *     tags: [Activity Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de l'inscription à supprimer
 *     responses:
 *       200:
 *         description: Inscription supprimée
 *       500:
 *         description: Erreur serveur
 */
router.delete('/:id', deleteActivityRegistration);

export default router;
